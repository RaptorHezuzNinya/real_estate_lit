import { LitElement, html, css } from 'lit-element';
import { hostStyles } from './re-form-styles';

class ReForm extends LitElement {
	static get styles() {
		return [
			css`
				${hostStyles}
			`
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
			${this.exampleForm()}
		`;
	}

	exampleForm = () => {
		html`
        <form action="/uploadfile" method="POST" enctype="multipart/form-data">
            <p>Select CSV/JSON file to upload:</p>
            <input type="file" name="file" id="csvfile">
            <input type="submit" value="Upload">Submit json</input>
        </form>`;
	};
}

customElements.define('re-form', ReForm);
