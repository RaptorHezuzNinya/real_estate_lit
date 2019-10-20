import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { RePaymentUploadStyles } from './re-payment-upload-styles.js';
import { PAYMENTS } from '../../redux/actions/payment.acs.js';
import '../re-file/re-file.js';
import '../re-button/re-button.js';
import { parseFile, CSV } from '../../redux/actions/file.acs';

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
		console.log('rerenderThis');

		return html`
			<h3>Payment Upload comp</h3>
			<br />
			<br />
			<br />
			<re-file @file-added=${this.fileAdded}></re-file>
			<br />
			${this.file
				? html`
						<re-button label="Save" @click=${this.handleSave}></re-button>
				  `
				: ''}
		`;
	}

	handleSave() {
		store.dispatch(parseFile({ file: this.file.file, fileType: CSV, subEntity: PAYMENTS }));
		// const filePondInstance = this.shadowRoot.querySelector('re-file').filePondInstance;
		// filePondInstance.removeFiles();
		// this.csvFile = false;
	}

	fileAdded(evt) {
		this.file = this.shadowRoot.querySelector('re-file').filePondInstance.getFile();
	}
}

customElements.define('re-payment-upload', RePaymentUpload);
