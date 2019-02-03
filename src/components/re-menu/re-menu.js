import { LitElement, html } from 'lit-element/';
import ReMenuStyles from './re-menu-styles';

class ReMenu extends LitElement {
	static get properties() {
		return {
			firstName: { type: String }
			// lastName: { type: String }
		};
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
