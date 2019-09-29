import { LitElement, html, unsafeCSS, css } from 'lit-element';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import * as FilePond from 'filepond';
import { normalize } from '../../assets/css/normalize';

import { CanFileStyles } from './can-file-styles';
import filepondImgPreviewStyles from 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import filepondStyles from 'filepond/dist/filepond.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';

class CanFile extends LitElement {
	static get styles() {
		return [
			normalize,

			CanFileStyles,
			unsafeCSS(filepondImgPreviewStyles),
			unsafeCSS(filepondStyles)
		];
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
		FilePond.registerPlugin(
			FilePondPluginImageExifOrientation,
			FilePondPluginImagePreview,
			FilePondPluginFileValidateSize,
			FilePondPluginFileEncode
		);

		this.filePondInstance = FilePond.create(inputEle, {
			labelIdle: `Drag & Drop je bestanden of <span class="filepond--label - action">Blader</span>`
		});
	}
}

customElements.define('can-file', CanFile);
