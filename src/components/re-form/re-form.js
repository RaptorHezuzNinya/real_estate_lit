import { LitElement, html, css } from 'lit-element';
import { hostStyles } from './re-form-styles';

class ReForm extends LitElement {
	static get styles() {
		return [
			// css`
			// `
		];
		// 	${hostStyles}
	}

	static get properties() {
		return {
			prop1: { type: String }
		};
	}

	updated(changedProperties) {
		// console.log(changedProperties); // logs previous values
		// console.log(this.foo); // logs current value
	}

	constructor() {
		super();
		this.prop1 = 'Hello World';
	}

	render() {
		return html`
			<form id="reForm" enctype="multipart/form-data">
				<label for="file">Choose a csv file</label>
				<input type="file" name="file" id="csvfile" />
				<input type="submit" @click="${(evt, data) => this.handleUpload(evt, data)}" />
			</form>
		`;
	}

	handleUpload(evt, data) {
		console.log(data);
		console.log(evt);

		// evt.preventDefault();
		// const y = this.shadowRoot.getElementById('csvfile');
		// const fileData = y.files[0];
		// if (!fileData) {
		// 	return window.alert('No file chosen');
		// }
		// const form = this.shadowRoot.getElementById('reForm');
		// return form.submit();
	}
}

customElements.define('re-form', ReForm);
