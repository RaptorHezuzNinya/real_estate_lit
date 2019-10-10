import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { fetchTenants } from '../../redux/actions/tenant';
import { fetchPayments } from '../../redux/actions/payment';
import { PageViewElement } from '../page-view-element.js';
import { SharedStyles } from '../shared-styles.js';
import { ReHomePageStyles } from './re-home-page-styles.js';
import '../re-button/re-button.js';
import '../re-test-card/re-test-card.js';
import '../re-user-dashboard/re-user-dashboard.js';
import { paymentsByTenantId } from '../../redux/selectors/payment.selector.js';

class ReHomePage extends connect(store)(PageViewElement) {
	static get styles() {
		return [SharedStyles, ReHomePageStyles];
	}

	static get properties() {
		return {
			tenants: { type: Object },
			paymentsByTenantId: { type: Object },
			user: Object
		};
	}

	constructor() {
		super();
		this.tenants = false;
		this.paymentsByTenantId = false;
		this.user = false;
	}

	// connectedCallback() {
	// 	super.connectedCallback();
	// 	store.dispatch(fetchTenants());
	//  store.dispatch(fetchPayments());
	// }

	render() {
		return html`
			<header>
				<h3>Public home page</h3>
			</header>
			<section>
				${this.renderSectionContent()}
			</section>
		`;
	}
	renderSectionContent() {
		if (!this.user) {
			return html`
				<re-login-page></re-login-page>
			`;
		}
		return html`
			<p>logged in</p>
			<re-user-dashboard></re-user-dashboard>
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
		this.user = state.user.user;
	}
}

window.customElements.define('re-home-page', ReHomePage);
