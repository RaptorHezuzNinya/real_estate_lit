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

class ReHomePage extends connect(store)(PageViewElement) {
	static get styles() {
		return [SharedStyles, ReHomePageStyles];
	}

	static get properties() {
		return {
			tenants: { type: Object }
		};
	}

	constructor() {
		super();
		this.tenants = false;
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants());
		store.dispatch(fetchPayments());
	}

	render() {
		return html`
			<section>
				<h3>Tenants overview</h3>
			</section>
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
					<re-tenant-card .tenant=${this.tenants[key]}></re-tenant-card>
				`;
				templates.push(template);
			}
		}
		return templates;
	}

	stateChanged(state) {
		this.tenants = state.tenant.tenants;
	}
}

window.customElements.define('re-home-page', ReHomePage);
