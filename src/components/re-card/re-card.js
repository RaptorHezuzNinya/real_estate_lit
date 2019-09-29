import { LitElement, html } from 'lit-element';
import { ReCardStyles } from './re-card-styles.js';
export class ReCard extends LitElement {
	static styles() {
		return [ReCardStyles];
	}
	render() {
		return html`
			<div class="mdc-card">
				<p>re-card component</p>
			</div>
		`;
	}
}
customElements.define('re-card', ReCard);
