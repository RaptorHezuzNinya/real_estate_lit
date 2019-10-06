import { LitElement, html } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { navigate, updateOffline, updateDrawerState } from '../../redux/actions/app.js';
import { ReAppStyles } from './re-app-styles';
import { normalize } from '../../assets/css/normalize';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '../re-snack-bar/re-snack-bar.js';
import '../re-404/re-404.js';
import '../can-header/can-header';
import '../re-register-page/re-register-page.js';
import '../re-home-page/re-home-page.js';

class ReApp extends connect(store)(LitElement) {
	static get styles() {
		return [normalize, ReAppStyles];
	}
	static get properties() {
		return {
			appTitle: { type: String },
			_page: { type: String },
			_drawerOpened: { type: Boolean },
			_snackbarOpened: { type: Boolean },
			_offline: { type: Boolean }
		};
	}

	render() {
		return html`
			<can-header></can-header>

			<app-drawer .opened="${this._drawerOpened}" @opened-changed="${this._drawerOpenedChanged}">
				<nav class="drawer-list">
					<a ?selected="${this._page === 'register'}" href="/register">Sign up</a>
				</nav>
			</app-drawer>

			<!-- Main content -->
			<main role="main" class="main-content">
				<re-home-page class="page" ?active="${this._page === 're-home-page'}"></re-home-page>
				<re-register-page class="page" ?active="${this._page === 'register'}"></re-register-page>
				<re-404 class="page" ?active="${this._page === 're-404'}"></re-404>
			</main>

			<snack-bar ?active="${this._snackbarOpened}">
				You are now ${this._offline ? 'offline' : 'online'}.
			</snack-bar>
		`;
	}

	constructor() {
		super();
		// To force all event listeners for gestures to be passive.
		// See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
		setPassiveTouchGestures(true);
	}

	firstUpdated() {
		installRouter(location => store.dispatch(navigate(decodeURIComponent(location.pathname))));
		installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
		installMediaQueryWatcher(`(min-width: 460px)`, () => store.dispatch(updateDrawerState(false)));
	}

	updated(changedProps) {
		if (changedProps.has('_page')) {
			const pageTitle = this.appTitle + ' | ' + this._page;
			updateMetadata({
				title: pageTitle,
				description: pageTitle
				// This object also takes an image property, that points to an img src.
			});
		}
	}

	_menuButtonClicked() {
		store.dispatch(updateDrawerState(true));
	}

	_drawerOpenedChanged(e) {
		store.dispatch(updateDrawerState(e.target.opened));
	}

	stateChanged(state) {
		this._page = state.app.currentPage.page;
		this._offline = state.app.offline;
		this._snackbarOpened = state.app.snackbarOpened;
		this._drawerOpened = state.app.drawerOpened;
	}
}

window.customElements.define('re-app', ReApp);
