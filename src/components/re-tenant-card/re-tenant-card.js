import { LitElement, html, unsafeCSS } from 'lit-element';
import { ReTenantCardStyles } from './re-tenant-card-styles.js';
import MDCCardStyles from './re-tenant-card-styles.scss';
import '../re-button/re-button.js';
export class ReTenantCard extends LitElement {
	static get styles() {
		return [ReTenantCardStyles, unsafeCSS(MDCCardStyles)];
	}

	static get properties() {
		return {
			tenant: { type: Object },
			prop: Boolean
		};
	}

	constructor() {
		super();
		this.tenant = false;
		this.prop = false;
	}

	render() {
		if (!this.tenant) return;
		return html`
			${!this.prop
				? html`
						<div class="mdc-card cardContent">
							<p>${this.tenant.email}</p>
							<div class="mdc-card__primary-action" tabindex="0" @click=${this.handle}>
								<!-- <re-button>show payments</re-button> -->
								<p>show payments</p>
							</div>
						</div>
				  `
				: ''}
		`;
	}
	handle() {
		this.props = !this.prop;
	}
}
customElements.define('re-tenant-card', ReTenantCard);
