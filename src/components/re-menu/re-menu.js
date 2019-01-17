import { LitElement, html } from 'lit-element/';
import menuComponentStyles from './re-menu-styles';
import '../re-api/re-api';

class MenuComponent extends LitElement {
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
			${menuComponentStyles}
			<api-component hidden path="tenants"></api-component>
			<main class="main-holder"><p>asdfasdf</p></main>
		`;
	}
}

customElements.define('menu-component', MenuComponent);
