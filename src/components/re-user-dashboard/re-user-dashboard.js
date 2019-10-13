import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';
import '../re-tenant-create-page/re-tenant-create-page.js';
import '../re-tab-bar/re-tab-bar.js';
import '../re-tenant-overview/re-tenant-overview.js';

export class ReUserDashboard extends connect(store)(LitElement) {
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
			<p>user dashboard component (logged in)</p>
			${this.activeTab === 0
				? html`
						<re-tenant-overview></re-tenant-overview>
				  `
				: ''}
			${this.activeTab === 1
				? html`
						<re-tenant-create-page></re-tenant-create-page>
				  `
				: ''}
		`;
	}

	tabChanged(evt) {
		this.activeTab = evt.detail.value;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
