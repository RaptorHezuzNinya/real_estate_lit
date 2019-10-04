import { LitElement, html } from 'lit-element';
import { ReTestCardStyles } from './re-test-card-styles.js';

export class ReTestCard extends LitElement {
	static get styles() {
		return [ReTestCardStyles];
	}
	static get properties() {
		return {
			cardIsActive: { type: Boolean },
			tenant: Object
		};
	}
	constructor() {
		super();
		this.cardIsActive = false;
		this.tenant = false;
	}

	render() {
		return html`
			<div class=${`card  ${this.cardIsActive ? 'cardActive' : null}`}>
				<section id="cardHeader" @click=${this.handleCardActivation}>
					<span class="cardAvatarContainer">
						<span class="cardAvatar"></span>
					</span>
					<span class="cardHeaderTextContainer">
						<div class="cardHeaderTitle"></div>
						<div class="cardHeaderSupportingText">${this.tenant.email}</div>
					</span>
				</section>

				<section class="nonSharedContent">
					<!-- <section class="greySquaresContainer">
						<span class="greySquare"></span>
						<span class="greySquare"></span>
						<span class="greySquare"></span>
						<span class="greySquare"></span>
					</section>
					<div class="greyLine"></div>
					<div class="greyLine"></div>
					<div class="greyLine"></div>
					<div class="greyLine"></div>
					<div class="greyLine"></div>
					<div class="greyLine"></div> -->
					<can-button-v2> Show payments</can-button-v2>
				</section>
			</div>
		`;
	}

	handleCardActivation() {
		this.cardIsActive = !this.cardIsActive;
	}
}
customElements.define('re-test-card', ReTestCard);
