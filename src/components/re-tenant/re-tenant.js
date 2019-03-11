import { LitElement, html } from 'lit-element';
// import 'normalize.css';
// import { ReNormalizeCss } from '../re-normalize-css/re-normalize-css';

class ReTenant extends LitElement {
	static get properties() {
		return {
			tenant: { type: Object }
		};
	}

	// constructor() {
	// 	super();
	// }

	render() {
		const { email, first_name, account_holder } = this.tenant;
		return html`
			<article>
				<h1>${email}</h1>
				<p>${first_name}</p>
				<p>${account_holder}</p>
				<br />
			</article>
			<!-- <p class="app-intro">To get started, edit <code>src/lit-app.js</code> and save to reload.</p> -->
		`;
	}
}

customElements.define('re-tenant', ReTenant);
