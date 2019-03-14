import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReTenantsOverViewStyles } from './re-tenants-overview-styles';
import { getTenants } from '../../redux/actions/tenant';
import '../re-tenant/re-tenant';
// import '../re-normalize/re-normalize';

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
			<!-- <link rel="stylesheet" href="../../../../node_modules/normalize.css/normalize.css" /> -->
			<!-- <re-normalize></re-normalize> -->
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
		this.tenants = state.tenantReducer.tenants;
	}
}

customElements.define('re-tenants-overview', ReTenantsOverView);
