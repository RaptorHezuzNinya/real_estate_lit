import { LitElement, html, unsafeCSS } from 'lit-element';
import { normalize } from '../../normalize';

class ReTenant extends LitElement {
	static get properties() {
		return {
			tenant: { type: Object }
		};
	}

	static get styles() {
		return html`
			<link rel="stylesheet" href="../../../../node_modules/normalize.css/normalize.css" />
		`;
	}

	render() {
		const { email, first_name, account_holder } = this.tenant;
		return html`
			<article>
				<h1>${email}</h1>
				<p>${first_name}</p>
				<p>${account_holder}</p>
				<br />
			</article>
		`;
	}
}

customElements.define('re-tenant', ReTenant);
