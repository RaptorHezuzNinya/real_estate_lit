import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReTenantOverviewStyles } from './re-tenant-overview-styles.js';
import '../re-test-card/re-test-card';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';
import { fetchUser } from '../../redux/actions/user.acs.js';

export class ReTenantOverview extends connect(store)(LitElement) {
	static get styles() {
		return [ReTenantOverviewStyles];
	}

	static get properties() {
		return {
			email: { type: String },
			accountHolder: { type: String },
			paymentsByTenantId: { type: Object }
		};
	}

	constructor() {
		super();
		this.email = 'fennascharloo@outlook.com';
		this.accountHolder = 'F. Scharloo';
		this.paymentsByTenantId = false;
	}

	render() {
		return html`
			<div>
				<h3>Tenant overview section</h3>
				<p>Here you find infomation concerning your added tenants</p>

				<re-button @button-click=${this.buttonClicked} buttonLabel="Opslaan"></re-button>
			</div>
		`;
	}
	buttonClicked() {
		store.dispatch(fetchUser());
	}
	renderTenantCards() {
		const templates = [];
		for (const key in this.tenants) {
			if (this.tenants.hasOwnProperty(key)) {
				const template = html`
					<re-test-card
						.tenant=${this.tenants[key]}
						.payments=${this.paymentsByTenantId[this.tenants[key].id]}
					>
					</re-test-card>
				`;
				templates.push(template);
			}
		}
		return templates;
	}

	stateChanged(state) {
		// this.paymentsByTenantId = paymentsByTenantId(state);
	}
}
customElements.define('re-tenant-overview', ReTenantOverview);
