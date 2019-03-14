import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReMenuStyles } from './re-menu-styles';
import '../re-tenants-overview/re-tenants-overview';

class ReMenu extends connect(store)(LitElement) {
	static get properties() {
		return {};
	}

	render() {
		return html`
			${ReMenuStyles}
			<main class="main-holder">
				<re-tenants-overview />
			</main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
