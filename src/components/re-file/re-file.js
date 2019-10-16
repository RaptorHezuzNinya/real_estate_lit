import { LitElement, html, unsafeCSS, css } from 'lit-element';
import * as FilePond from 'filepond';
import { ReFileStyles } from './re-file-styles';
import filepondStyles from 'filepond/dist/filepond.css';

class ReFile extends LitElement {
	static get styles() {
		return [ReFileStyles, unsafeCSS(filepondStyles)];
	}

	static get properties() {
		return {
			filePondInstance: { type: Object },
			maxFiles: { type: Number }
		};
	}

	constructor() {
		super();
		this.filePondInstance = null;
		this.maxFiles = 1;
	}

	render() {
		return html`
			<input
				type="file"
				id="fileInput"
				class="filepond"
				name="filepond"
				data-max-file-size="5MB"
				data-max-files=${this.maxFiles}
			/>
		`;
	}

	firstUpdated() {
		this.registerFilePondInput();
		const pond = this.shadowRoot.querySelector('.filepond--root');

		pond.addEventListener('FilePond:addfile', e => {
			console.log('FilePond:addfile event fired!', e.detail);
		});
	}

	registerFilePondInput() {
		const inputEle = this.shadowRoot.querySelector('input');
		this.filePondInstance = FilePond.create(inputEle, {
			labelIdle: `Drag & Drop je bestanden of <span class="filepond--label - action">Blader</span>`
		});
	}
}

customElements.define('re-file', ReFile);
