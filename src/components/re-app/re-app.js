import { LitElement, html } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';
import { installOfflineWatcher } from 'pwa-helpers/network.js';
import { installRouter } from 'pwa-helpers/router.js';
import { updateMetadata } from 'pwa-helpers/metadata.js';
import { navigate, updateOffline, setDrawer } from '../../redux/actions/app.acs.js';
import { ReAppStyles } from './re-app-styles';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-header/app-header.js';
import '../re-snack-bar/re-snack-bar.js';
import '../can-header/can-header';
import '../re-register-page/re-register-page.js';
import '../re-home-page/re-home-page.js';
import '../re-user-dashboard/re-user-dashboard.js';
import '../re-login-page/re-login-page.js';

class ReApp extends connect(store)(LitElement) {
	static get styles() {
		return [ReAppStyles];
	}
	static get properties() {
		return {
			appTitle: { type: String },
			page: { type: String },
			drawerOpen: { type: Boolean },
			snackbaropen: { type: Boolean },
			offline: { type: Boolean },
			user: Object
		};
	}

	constructor() {
		super();
		// To force all event listeners for gestures to be passive.
		// See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
		setPassiveTouchGestures(true);
		this.user = false;
		this.page = false;
	}

	firstUpdated() {
		const page = decodeURIComponent(location.pathname);
		installRouter(location => store.dispatch(navigate({ page: page })));
		installOfflineWatcher(offline => store.dispatch(updateOffline(offline)));
		installMediaQueryWatcher(`(min-width: 460px)`, () =>
			store.dispatch(setDrawer({ state: false }))
		);
	}

	updated(changedProps) {
		if (changedProps.has('page')) {
			const pageTitle = this.appTitle + ' | ' + this.page;
			updateMetadata({
				title: pageTitle,
				description: pageTitle
			});
		}
	}

	render() {
		return html`
			<can-header></can-header>

			<app-drawer .opened="${this.drawerOpen}" @opened-changed="${this.drawerChanged}">
				<nav class="drawer-list">
					<a ?selected="${this.page === '/register'}" href="/register">Sign up</a>
				</nav>
			</app-drawer>

			<!-- Main content -->
			<main role="main" class="main-content">
				<re-home-page class="page" ?active="${this.page === '/home'}"></re-home-page>
				<re-login-page class="page" ?active="${this.page === '/login'}"></re-login-page>
				<re-register-page class="page" ?active="${this.page === '/register'}"></re-register-page>
				<re-user-dashboard
					class="page"
					?active="${this.page === '/user/dashboard'}"
				></re-user-dashboard>

				<re-404 class="page" ?active="${this.page === 're-404'}"></re-404>
			</main>

			<snack-bar ?active="${this.snackbaropen}">
				You are now ${this.offline ? 'offline' : 'online'}.
			</snack-bar>
		`;
	}

	drawerChanged(evt) {
		store.dispatch(setDrawer({ state: evt.target.open }));
	}

	stateChanged(state) {
		this.page = state.app.currentPage.page;
		this.offline = state.app.offline;
		this.snackbaropen = state.app.snackbaropen;
		this.drawerOpen = state.app.drawerOpen;
		this.user = state.user.user;
	}
}

window.customElements.define('re-app', ReApp);
