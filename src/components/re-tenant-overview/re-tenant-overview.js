import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReTenantOverviewStyles } from './re-tenant-overview-styles.js';
import '../re-test-card/re-test-card';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';
import { fetchUser } from '../../redux/actions/user.acs.js';
import { fetchTenants } from '../../redux/actions/tenant.acs';

export class ReTenantOverview extends connect(store)(LitElement) {
	static get styles() {
		return [ReTenantOverviewStyles];
	}
	static get properties() {
		return {
			currentUserId: String,
			tenants: Object
		};
	}

	constructor() {
		super();
		this.currentUserId = false;
		this.tenants = false;
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants({ currentUserId: this.currentUserId }));
	}

	render() {
		return html`
			<div>
				<h3>Tenant overview section</h3>
				<p>Here you find infomation concerning your added tenants</p>
				<div class="holder">
					${this.renderTenantCards()}
				</div>
				<div class="footer">
					<re-button @button-click=${this.fetchUser} buttonLabel="fetch user (dev)"></re-button>
					<re-button
						@button-click=${this.fetchTenants}
						buttonLabel="fetch tenants (dev)"
					></re-button>
				</div>
			</div>
		`;
	}

	renderTenantCards() {
		const templates = [];
		for (const key in this.tenants) {
			if (this.tenants.hasOwnProperty(key)) {
				const template = html`
					<re-test-card .tenant=${this.tenants[key]}> </re-test-card>
				`;
				templates.push(template);
			}
		}
		return templates;
	}

	stateChanged(state) {
		// this.paymentsByTenantId = paymentsByTenantId(state);
		this.tenants = state.tenant.tenants;
		this.currentUserId = state.user.user.id;
	}
}
customElements.define('re-tenant-overview', ReTenantOverview);
