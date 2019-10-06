import { LitElement, html } from 'lit-element';
import { ReRegisterPageStyles } from './re-register-page-styles.js';
import '../re-card/re-card.js';
export class ReRegisterPage extends LitElement {
	static get styles() {
		return [ReRegisterPageStyles];
	}
	constructor() {
		super();
	}

	render() {
		return html`
			<p>User Register page</p>
			<re-card></re-card>
		`;
	}
}
customElements.define('re-register-page', ReRegisterPage);
