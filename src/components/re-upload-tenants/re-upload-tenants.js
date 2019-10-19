import { LitElement, html } from 'lit-element';

import { ReUploadTenantsStyles } from './re-upload-tenants-styles.js';

class ReUploadTenants extends LitElement {
	static get styles() {
		return [ReUploadTenantsStyles];
	}
	render() {
		return html`
			<div><p>upload tenants component</p></div>
		`;
	}
}

customElements.define('re-upload-tenants', ReUploadTenantsStyles);
