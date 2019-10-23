import { html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';
import { PageViewElement } from '../page-view-element';
import '../re-tenant-create-page/re-tenant-create-page.js';
import '../re-tab-bar/re-tab-bar.js';
import '../re-payment-upload/re-payment-upload.js';

import '../re-tenants-upload/re-tenants-upload.js';
import { setTab } from '../../redux/actions/pageTab.acs.js';
import '../re-overview-tab/re-overview-tab.js';

export class ReUserDashboard extends connect(store)(PageViewElement) {
	static get styles() {
		return [ReUserDashboardStyles];
	}

	static get properties() {
		return {
			tabs: Array,
			activeTab: Number
		};
	}

	constructor() {
		super();
		this.tabs = [
			{ tabIndex: 0, label: 'Overview' },
			{ tabIndex: 1, label: 'Upload Payments csv' },
			{ tabIndex: 2, label: 'Create tenant' },
			{ tabIndex: 3, label: 'Upload tenants' }
		];
		this.activeTab = 0;
	}

	render() {
		return html`
			<re-tab-bar
				.tabs=${this.tabs}
				@re-active-tab-change=${this.tabChanged}
				.activeTab=${this.activeTab}
			></re-tab-bar>
			${this.renderPageContent()}
		`;
	}

	renderPageContent() {
		switch (this.activeTab) {
			case 0:
				return html`
					<re-overview-tab></re-overview-tab>
				`;
			case 1:
				return html`
					<re-payment-upload></re-payment-upload>
				`;
			case 2:
				return html`
					<re-tenant-create-page></re-tenant-create-page>
				`;
			case 3:
				return html`
					<re-tenants-upload></re-tenants-upload>
				`;

			default:
				break;
		}
	}

	tabChanged(evt) {
		store.dispatch(setTab({ tabIndex: evt.detail.value, location: 'userDashboard' }));
	}

	stateChanged(state) {
		this.activeTab = state.pageTabs.userDashboard.activeTab;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
