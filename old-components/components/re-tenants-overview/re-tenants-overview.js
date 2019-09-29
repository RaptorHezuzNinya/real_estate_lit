import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { fetchTenants } from '../../redux/actions/tenant';
import '../re-tenant/re-tenant';

class ReTenantsOverView extends connect(store)(LitElement) {
	static get properties() {
		return {
			tenants: { type: Array }
		};
	}

	constructor() {
		super();
		store.dispatch(fetchTenants({}));
	}

	stateChanged(state) {
		this.tenants = state.tenantReducer.tenants;
	}

	render() {
		return html`
			<ul>
				${this.renderTenants()}
			</ul>
		`;
	}

	renderTenants() {
		const templates = [];
		for (let key in this.tenants) {
			let tenant = this.tenants[key];
			let tenantTempl = html`
				<re-tenant .tenant=${tenant}></re-tenant>
			`;
			templates.push(tenantTempl);
		}
		return templates;
	}
}

customElements.define('re-tenants-overview', ReTenantsOverView);
