import { LitElement, html, unsafeCSS } from 'lit-element';
import MDCCardStyles from './re-card-styles.scss';
import { ReCardStyles } from './re-card-styles.js';

export class ReCard extends LitElement {
	static get styles() {
		return [ReCardStyles, unsafeCSS(MDCCardStyles)];
	}

	constructor() {
		super();
	}
	render() {
		return html`
			<!-- <div class="mdc-card"></div> -->
			<div class="mdc-card">
				<p>card content</p>

				<div class="mdc-card__actions mdc-card__action mdc-card__action--button">
					<can-button-v2
						class="mdc-card__action mdc-card__action--button"
						buttonLabel="Action 1"
					></can-button-v2>
					<can-button-v2
						class="mdc-card__action mdc-card__action--button"
						buttonLabel="Action 2"
					></can-button-v2>
				</div>
			</div>
		`;
	}
}
customElements.define('re-card', ReCard);
