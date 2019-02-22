import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import ReMenuStyles from './re-menu-styles';
import { getTenants } from '../../redux/actions/tenant';

class ReMenu extends connect(store)(LitElement) {
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
		// const { firstName, lastName } = this;
		return html`
			${ReMenuStyles}
			<main class="main-holder"><p>asdfasdf</p></main>
		`;
	}

	stateChanged(state) {
		this.tenants = state.tenants;
	}
}

customElements.define('re-menu', ReMenu);
