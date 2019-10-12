import { LitElement, html } from 'lit-element';
import { ReTenantCreatePageStyles } from './re-tenant-create-page-styles.js';

export class ReTenantCreatePage extends LitElement {
	static get styles() {
		return [ReTenantCreatePageStyles];
	}
	static get properties() {
		return {
			propName: { type: String }
		};
	}
	render() {
		return html`
			<p>Tenant create page</p>
		`;
	}
}
customElements.define('re-tenant-create-page', ReTenantCreatePage);
