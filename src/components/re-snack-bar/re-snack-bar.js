import { LitElement, html, css } from 'lit-element';
import { ReSnackBarStyles } from './re-snack-bar-styles.js';

class SnackBar extends LitElement {
	static get styles() {
		return [ReSnackBarStyles];
	}
	static get properties() {
		return {
			active: { type: Boolean }
		};
	}

	render() {
		return html`
			<slot></slot>
		`;
	}
}

window.customElements.define('snack-bar', SnackBar);
