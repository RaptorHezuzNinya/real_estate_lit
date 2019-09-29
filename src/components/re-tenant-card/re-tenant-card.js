import { LitElement, html, unsafeCSS } from 'lit-element';
import { ReCardStyles } from './re-tenant-card-styles.js';
import MDCCardStyles from './re-tenant-card-styles.scss';

export class ReTenantCard extends LitElement {
	static get styles() {
		return [ReCardStyles, unsafeCSS(MDCCardStyles)];
	}

	static get properties() {
		return {
			propName: { type: String }
		};
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<div class="mdc-card cardContent">
				<p>re-card component</p>
			</div>
		`;
	}
}
customElements.define('re-tenant-card', ReTenantCard);
