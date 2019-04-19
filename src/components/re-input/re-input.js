import { LitElement, html, css } from 'lit-element';

class ReInput extends LitElement {
	static get styles() {
		return [];
	}

	static get properties() {
		return {
			inputType: String,
			inputName: String,
			inputText: String
		};
	}

	render() {
		const { inputType, inputName, inputText } = this;
		return html`
			<input type="${inputType}" name="${inputName}" value="${inputText}" />
		`;
	}
}

customElements.define('re-input', ReInput);
