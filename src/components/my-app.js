import { LitElement, html } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { store } from '../redux/store';
import { navigate, updateOffline, updateDrawerState } from '../redux/actions/app.js';
import { MyAppStyles } from './my-app-styles';
import { normalize } from '../assets/css/normalize';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import './snack-bar.js';
import './can-header/can-header';

class MyApp extends connect(store)(LitElement) {
	static get styles() {
		return [normalize, MyAppStyles];
	}
	static get properties() {
		return {
			appTitle: { type: String },
			_page: { type: String },
			_drawerOpened: { type: Boolean },
			_snackbarOpened: { type: Boolean },
			_offline: { type: Boolean },

		};
	}

	render() {
		return html`
			<can-header></can-header>

			<app-drawer .opened="${this._drawerOpened}" @opened-changed="${this._drawerOpenedChanged}">
				<nav class="drawer-list">
					<a ?selected="${this._page === 'view1'}" href="/view1">View1</a>
					<a ?selected="${this._page === 'view2'}" href="/view2">View2</a>
					${this._user
				? html`
								<a ?selected="${this._page === 'user/dashboard'}" href="/user/dashboard"
									>Dashboard</a
								>
						  `
				: html`
								<a ?selected="${this._page === 'login'}" href="/login">Login</a>
						  `}
				</nav>
			</app-drawer>

			<!-- Main content -->
			<main role="main" class="main-content">
				<my-view1 class="page" ?active="${this._page === 'view1'}"></my-view1>

				<my-view404 class="page" ?active="${this._page === 'view404'}"></my-view404>
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

window.customElements.define('my-app', MyApp);
