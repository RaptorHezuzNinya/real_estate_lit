import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { getTenants } from '../../redux/actions/tenant';
import '../re-tenant/re-tenant';

class ReTenantsOverView extends connect(store)(LitElement) {
	static get properties() {
		return {
			tenants: { type: Array }
		};
	}

	constructor() {
		super();
		store.dispatch(getTenants());
	}

	render() {
		const { tenants } = this;

		return html`
			<ul>
				${tenants.map(
					tenant =>
						html`
							<re-tenant .tenant=${tenant}></re-tenant>
						`
				)}
			</ul>
		`;
	}

	stateChanged(state) {
		console.log('state.tenantReducer.tenants', state.tenantReducer.tenants);
		this.tenants = state.tenantReducer.tenants;
	}
}

customElements.define('re-tenants-overview', ReTenantsOverView);
