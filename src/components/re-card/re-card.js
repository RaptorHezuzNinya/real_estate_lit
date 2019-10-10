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
			<div class="mdc-card">
				<slot name="content"></slot>

				<div class="mdc-card__actions mdc-card__action mdc-card__action--button">
					
					<slot name="action1"><slot>
					<slot name="action2"><slot>
				</div>
			</div>
		`;
	}
}
customElements.define('re-card', ReCard);
