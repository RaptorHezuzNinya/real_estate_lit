import { LitElement, html } from 'lit-element';
// import '../re-normalize/re-normalize';

class ReTenant extends LitElement {
	static get properties() {
		return {
			tenant: { type: Object }
		};
	}

	render() {
		const { email, first_name, account_holder } = this.tenant;
		return html`
			<!-- <re-normalize></re-normalize> -->
			<link rel="stylesheet" href="../../../../node_modules/normalize.css/normalize.css" />
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
