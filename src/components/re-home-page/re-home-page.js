import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { PageViewElement } from '../page-view-element.js';
import { SharedStyles } from '../shared-styles.js';
import { ReHomePageStyles } from './re-home-page-styles.js';
import '../re-button/re-button.js';
import '../re-test-card/re-test-card.js';

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

	render() {
		return html`
			<header>
				<h3>Public home page</h3>
				<br />
				<br />
				<br />
				<br />
				<p>re-home-page</p>
				<br />
				<br />
			</header>
		`;
	}

	stateChanged(state) {
		this.user = state.user.user;
	}
}

window.customElements.define('re-home-page', ReHomePage);
