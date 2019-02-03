import { LitElement, html } from 'lit-element/';
import { connect } from 'pwa-helpers';
import ReMenuStyles from './re-menu-styles';
import { store } from '../../redux/store';

class ReMenu extends connect(store)(LitElement) {
	static get properties() {
		return {
			tenants: { type: Array }
		};
	}

	stateChanged(state) {
		this.tentants = state.tenants;
	}

	constructor() {
		super();
		this.firstName = 'wardd';
		// this.lastName = 'verhoef';
	}

	render() {
		// const { firstName, lastName } = this;
		return html`
			${ReMenuStyles}
			<main class="main-holder"><p>asdfasdf</p></main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
