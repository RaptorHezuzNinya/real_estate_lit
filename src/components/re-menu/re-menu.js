import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReMenuStyles } from './re-menu-styles';
import '../re-tenants-overview/re-tenants-overview';
// import { normalize } from '../../normalize';

class ReMenu extends connect(store)(LitElement) {
	// static get properties() {
	// 	return css`
	// 		${normalize}
	// 	`;
	// }

	render() {
		return html`
			<main class="main-holder">
				<re-tenants-overview></re-tenants-overview>
			</main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
