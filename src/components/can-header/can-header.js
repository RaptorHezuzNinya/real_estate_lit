import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { setDrawer, navigate } from '../../redux/actions/app.acs.js';
import { CanHeaderStyles } from './can-header-styles';
import { userProfileIcon, menuIcon, radminiIcon } from '../../assets/css/icons';
import '../can-button/can-button';

class CanHeader extends connect(store)(LitElement) {
	static get styles() {
		return [CanHeaderStyles];
	}
	static get properties() {
		return {
			user: { type: Object }
		};
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<header>
				<can-button navigation class="left" @click="${this.handleMenuButtonClicked}">
					<div class="leftIconHolder" slot="icon">
						${menuIcon}
					</div>
				</can-button>
				<can-button navigation class="middle" @click="${this.handleCanLogoClicked}">
					<div>
						${radminiIcon}
					</div>
				</can-button>

				<can-button navigation class="right" @click="${this.handleUserProfileButtonClicked}">
					<div class="rightIconHolder" slot="icon">
						${userProfileIcon}
					</div>
				</can-button>
			</header>
		`;
	}

	handleMenuButtonClicked() {
		console.log('setDrawer can-header');

		store.dispatch(setDrawer({ state: true }));
	}

	handleCanLogoClicked() {
		window.history.pushState({}, '', '/');
		store.dispatch(navigate({ page: window.location.pathname }));
	}
}

customElements.define('can-header', CanHeader);
