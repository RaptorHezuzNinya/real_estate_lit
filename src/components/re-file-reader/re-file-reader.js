import { LitElement, html } from 'lit-element';
import { ReFileLoaderStyles } from './re-file-reader-styles.js';

class ReFileReader extends LitElement {
	static get styles() {
		return [ReFileLoaderStyles];
	}
	render() {
		return html`
			<div>file reader component</div>
		`;
	}
}

customElements.define('re-file-reader', ReFileReader);
