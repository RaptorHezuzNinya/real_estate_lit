import { LitElement, html, css } from 'lit-element';

class ReTenant extends LitElement {
	static get styles() {
		return css``;
	}

	static get properties() {
		return {
			tenant: { type: Object }
		};
	}

	render() {
		const { email, first_name: firstName, account_holder: accountHolder } = this.tenant;
		return html`
			<article style="border: 1px solid black">
				<h1>${email}</h1>
				<p>${firstName}</p>
				<p>${accountHolder}</p>
				<br />
			</article>
		`;
	}
}

customElements.define('re-tenant', ReTenant);
