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

			<re-button label="Save" @click=${this.uploadFile}></re-button>
		`;
	}

	uploadFile() {}

	fileAdded(evt) {
		const upload = this.shadowRoot.querySelector('re-file').filePondInstance.getFile();

		const file = {
			name: upload.filename,
			fileData: upload.getFileEncodeDataURL()
		};

		store.dispatch(uploadPayments({ file }));
		// debugger;
	}
}

customElements.define('re-payment-upload', RePaymentUpload);
