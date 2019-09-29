import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { PageViewElement } from '../page-view-element.js';
import { SharedStyles } from '../shared-styles.js';
import { fetchTenants } from '../../redux/actions/tenant';
import '../can-button-v2/can-button-v2.js';
import '../re-tenant-card/re-tenant-card.js';

class ReHomePage extends connect(store)(PageViewElement) {
	static get styles() {
		return [SharedStyles];
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
