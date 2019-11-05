import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { ReCardV2Styles } from './re-card-v2-styles.js';
§
export class ReCardV2 extends LitElement {
	static get styles() {
		return [ReCardV2Styles];
	}
	static get properties() {
		return {
			cardIsActive: { type: Boolean }
		};
	}
	constructor() {
		super();
		this.cardIsActive = false;
	}

	render() {
		let classes = { card: true, cardActive: this.cardIsActive };
		return html`
			<div class=${classMap(classes)}>
				<section id="cardHeader" @click=${this.handleCardActivation}>
					
					
					<span class="cardHeaderTextContainer">
						<div class="cardHeaderTitle">${this.tenant.first_name} ${this.tenant.last_name}</div>
						<div class="cardHeaderSupportingText">${this.tenant.email}</div>
					</span>

				</section>

				<section class="content">
					${this.renderPayments()}
				</section>
			</div>
		`;
	}

	handleCardActivation() {
		this.cardIsActive = !this.cardIsActive;
	}
}
customElements.define('re-test-card', ReCardV2Styles);
