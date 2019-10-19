import { html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';
import { PageViewElement } from '../page-view-element';
import '../re-tenant-create-page/re-tenant-create-page.js';
import '../re-tab-bar/re-tab-bar.js';
import '../re-payment-upload/re-payment-upload.js';
import '../re-tenant-overview/re-tenant-overview.js';

export class ReUserDashboard extends connect(store)(PageViewElement) {
	static get styles() {
		return [ReUserDashboardStyles];
	}

	static get properties() {
		return {
			activeTab: Number
		};
	}

	constructor() {
		super();
		this.activeTab = 0;
	}

	render() {
		return html`
			<re-tab-bar @re-active-tab-change=${this.tabChanged}></re-tab-bar>
			${this.renderPageContent()}
		`;
	}

	renderPageContent() {
		switch (this.activeTab) {
			case 0:
				return html`
					<re-tenant-overview></re-tenant-overview>
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
					<re-upload-tenants></re-upload-tenants>
				`;

			default:
				break;
		}
	}

	tabChanged(evt) {
		this.activeTab = evt.detail.value;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
