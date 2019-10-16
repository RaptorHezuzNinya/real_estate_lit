import { LitElement, html } from 'lit-element';
import { RePaymentUploadStyles } from './re-payment-upload-styles.js';
import '../re-file/re-file.js';
class RePaymentUpload extends LitElement {
	static get styles() {
		return [RePaymentUploadStyles];
	}
	static get properties() {
		return {
			listItem: { type: Object }
		};
	}

	constructor() {
		super();
		this.listItem = null;
	}

	render() {
		return html`
			<br />
			<br />
			<br />
			<h3>Payment Upload comp</h3>
			<br />
			<br />
			<br />
			<br />

			<re-file></re-file>

			<br />
			<br />
			<br />
			<br />
			<br />
		`;
	}
}

customElements.define('re-payment-upload', RePaymentUpload);
