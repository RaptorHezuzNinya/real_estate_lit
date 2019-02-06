import { LitElement, html } from 'lit-element/';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import ReMenuStyles from './re-menu-styles';
import { getAllTenants } from '../../redux/actions/tenant';

class ReMenu extends connect(store)(LitElement) {
	static get properties() {
		return {
			tenants: { type: Array }
		};
	}

	constructor() {
		super();
		this.firstName = 'wardd';
		this.getTenants();
	}

	getTenants() {
		axios
			.get('/tenants', {})
			.then(function(response) {
				console.log(response);
			})
			.catch(function(error) {
				console.log(error);
			})
			.then(function() {
				console.log('made it till ends ');
			});
	}

	render() {
		// const { firstName, lastName } = this;
		return html`
			${ReMenuStyles}
			<main class="main-holder"><p>asdfasdf</p></main>
		`;
	}

	stateChanged(state) {
		this.tentants = state.tenants;
	}
}

customElements.define('re-menu', ReMenu);
