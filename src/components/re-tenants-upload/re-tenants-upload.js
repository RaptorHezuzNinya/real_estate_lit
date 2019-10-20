import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReTenantsUploadStyles } from './re-tenants-upload-styles.js';
import { parseFile, CSV } from '../../redux/actions/file.acs.js';
import { TENANTS } from '../../redux/actions/tenant.acs';
import '../re-file/re-file.js';
import '../re-button/re-button.js';

class ReTenantsUpload extends connect(store)(LitElement) {
	static get styles() {
		return [ReTenantsUploadStyles];
	}

	static get properties() {
		return {
			csvFile: { type: Object }
		};
	}
	constructor() {
		super();
		this.csvFile = false;
	}

	render() {
		return html`
			<div>
				<br />
				<br />

				<h3>upload tenants component</h3>

				<br />
				<br />

				<re-file @file-added=${this.fileAdded}></re-file>
				${this.csvFile
					? html`
							<re-button @click=${this.handleSave} label="Opslaan"> </re-button>
					  `
					: ''}
			</div>
		`;
	}

	handleSave() {
		// store.dispatch(parseFile({ file: this.csvFile.file, fileType: CSV, subEntity: TENANTS })); not needed now we have tenants
		const filePondInstance = this.shadowRoot.querySelector('re-file').filePondInstance;
		filePondInstance.removeFiles();
		this.csvFile = false;
	}

	fileAdded(evt) {
		this.csvFile = evt.detail.value;
	}
}

customElements.define('re-tenants-upload', ReTenantsUpload);
