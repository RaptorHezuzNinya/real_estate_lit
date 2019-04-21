import { LitElement, html, css } from 'lit-element';
import { hostStyles } from './re-form-styles';

class ReForm extends LitElement {
	static get styles() {
		return [
			// css`
			// 	${hostStyles}
			// `
		];
	}

	static get properties() {
		return {};
	}

	render() {
		return html`
			<!-- <form name="reForm">
				<input type="upload" />

				<input type="submit" name="submitForm" />
			</form> -->
			<form enctype="multipart/form-data">
            	<p>Select CSV/JSON file to upload:</p>
				<input type="file" name="file" id="csvfile">
				<input type="submit" value="Upload" @click="${(evt, data) =>
					this.handleUpload(evt, data)}">Submit json</input>
        	</form>
		`;
	}

	handleUpload(e, d) {
		e.preventDefault();
		const y = this.shadowRoot.getElementById('csvfile');
		fileData = y.files[0];
	}
}

customElements.define('re-form', ReForm);
