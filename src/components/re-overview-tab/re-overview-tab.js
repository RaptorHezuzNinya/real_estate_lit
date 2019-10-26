import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReOverviewTabStyles } from './re-overview-tab.js-styles.js';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';
import { fetchUser } from '../../redux/actions/user.acs.js';
import { fetchTenants } from '../../redux/actions/tenant.acs';
import '../re-tenant-overview/re-tenant-overview.js';
import { fetchPayments } from '../../redux/actions/payment.acs';

export class ReOverviewTab extends connect(store)(LitElement) {
	static get styles() {
		return [ReOverviewTabStyles];
	}

	static get properties() {
		return {
			userId: String,
			tenants: Object
		};
	}
	constructor() {
		super();
		this.userId = false;
		this.tenants = false;
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants());
		store.dispatch(fetchPayments());
	}

	render() {
		return html`
			<re-tenant-overview .tenants=${this.tenants}></re-tenant-overview>
			<div class="footer">
				<re-button @button-click=${this.fetchUser} label="fetch user"></re-button>
			</div>
		`;
	}

	fetchUser() {
		store.dispatch(fetchUser());
	}

	stateChanged(state) {
		this.tenants = state.tenant.tenants;
		this.userId = state.user.user.id;
	}
}
customElements.define('re-overview-tab', ReOverviewTab);
