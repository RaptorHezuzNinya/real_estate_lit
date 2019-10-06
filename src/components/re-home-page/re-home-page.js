import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { fetchTenants } from '../../redux/actions/tenant';
import { fetchPayments } from '../../redux/actions/payment';
import { PageViewElement } from '../page-view-element.js';
import { SharedStyles } from '../shared-styles.js';
import { ReHomePageStyles } from './re-home-page-styles.js';
import '../can-button-v2/can-button-v2.js';
import '../re-test-card/re-test-card.js';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';

class ReHomePage extends connect(store)(PageViewElement) {
	static get styles() {
		return [SharedStyles, ReHomePageStyles];
	}

	static get properties() {
		return {
			tenants: { type: Object },
			paymentsByTenantId: { type: Object }
		};
	}

	constructor() {
		super();
		this.tenants = false;
		this.paymentsByTenantId = false;
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants());
		store.dispatch(fetchPayments());
	}

	render() {
		console.log(this.paymentsByTenantId);
		return html`
			<header>
				<h3>Tenants overview</h3>
			</header>
			<section>
				${this.renderTenantCards()}
			</section>
			<section>
				<p>section 3</p>
			</section>
		`;
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
		this.tenants = state.tenant.tenants;
		this.paymentsByTenantId = paymentsByTenantId(state);
	}
}

window.customElements.define('re-home-page', ReHomePage);
