import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { RePaymentUploadStyles } from './re-payment-upload-styles.js';
import '../re-file/re-file.js';
import '../re-button/re-button.js';
import { uploadPayments } from '../../redux/actions/payment.acs.js';

class RePaymentUpload extends connect(store)(LitElement) {
	static get styles() {
		return [RePaymentUploadStyles];
	}
	static get properties() {
		return {
			file: Object
		};
	}

	constructor() {
		super();
		this.file = false;
	}

	render() {
		return html`
			<h3>Payment Upload comp</h3>
			<br />
			<br />
			<br />
			<re-file @file-added=${this.fileAdded}></re-file>
			<br />
		`;
	}
	fileAdded(evt) {
		const file = this.shadowRoot.querySelector('re-file').filePondInstance.getFile();

		store.dispatch(uploadPayments({ file }));
		console.log('file added', evt);
	}
}

customElements.define('re-payment-upload', RePaymentUpload);
