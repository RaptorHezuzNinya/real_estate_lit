import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { ReOverviewTabStyles } from './re-overview-tab.js-styles.js';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';
import { fetchUser } from '../../redux/actions/user.acs.js';
import { fetchTenants } from '../../redux/actions/tenant.acs.js';
import { fetchPayments } from '../../redux/actions/payment.acs.js';
import { fetchIng } from '../../redux/actions/ing.acs.js';
import { ACCESS_TOKEN } from '../../redux/actions/subEntities.js';
import '../re-tenant-overview/re-tenant-overview.js';
import '../re-button/re-button.js';

export class ReOverviewTab extends connect(store)(LitElement) {
	static get styles() {
		return [ReOverviewTabStyles];
	}

	static get properties() {
		return {
			userId: String,
			tenants: Object,
			paymentsByTenant: Array
		};
	}
	constructor() {
		super();
		this.userId = false;
		this.tenants = false;
		this.paymentsByTenant = false;
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants());
		store.dispatch(fetchPayments());
	}

	render() {
		return html`
			<div class="tokenBTNWrapper">
				<re-button @click=${this.callIngAction} label="fetch token"></re-button>
			</div>

			<re-tenant-overview
				.paymentsByTenant=${this.paymentsByTenant}
				.tenants=${this.tenants}
			></re-tenant-overview>

			<div class="footer">
				<re-button @button-click=${this.fetchUser} label="fetch user"></re-button>
			</div>
		`;
	}

	callIngAction() {
		console.log('button ing called');
		store.dispatch(fetchIng({ subEntity: ACCESS_TOKEN }));
	}

	fetchUser() {
		store.dispatch(fetchUser());
	}

	stateChanged(state) {
		this.tenants = state.tenant.tenants;
		this.userId = state.user.user.id;
		this.paymentsByTenant = paymentsByTenantId(state);
	}
}
customElements.define('re-overview-tab', ReOverviewTab);
