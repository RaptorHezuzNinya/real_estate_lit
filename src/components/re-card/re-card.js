import { LitElement, html, unsafeCSS } from 'lit-element';
import { ReCardStyles } from './re-card-styles.js';
// import { MDCCard } from '@material/card';
import MDCCardStyles from './re-card-styles.scss';
export class ReCard extends LitElement {
	static styles() {
		return [ReCardStyles, unsafeCSS(MDCCardStyles)];
	}

	render() {
		return html`
			<div class="mdc-card">
				<!-- ... content ... -->
				<h1>re card</h1>
			</div>
		`;
	}
}
customElements.define('re-card', ReCard);
