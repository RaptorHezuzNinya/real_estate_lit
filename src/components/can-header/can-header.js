import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { updateDrawerState, navigate } from '../../redux/actions/app';
import { normalize } from '../../assets/css/normalize';

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
					<div class="canLogoHolder">
						${crowdAboutNowIcon}
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
		store.dispatch(updateDrawerState(true));
	}

	handleCanLogoClicked() {
		window.history.pushState({}, '', '/');
		store.dispatch(navigate(window.location.pathname));
	}

	handleUserProfileButtonClicked() {
		console.log('user Profile button clicked');

	}

	stateChanged(state) {

	}
}

customElements.define('can-header', CanHeader);
