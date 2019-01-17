import { LitElement, html } from 'lit-element/';

class Tenant extends LitElement {
	static get properties() {
		return {
			firstName: { type: String },
			lastName: { type: String }
		};
	}

	constructor() {
		super();
		this.firstName = 'wardd';
		this.lastName = 'verhoef';
	}

	render() {
		const { firstName, lastName } = this;
		return html`
			<h1>${firstName + lastName}</h1>
			<!-- <p class="app-intro">To get started, edit <code>src/lit-app.js</code> and save to reload.</p> -->
		`;
	}
}

customElements.define('tenant-component', Tenant);
