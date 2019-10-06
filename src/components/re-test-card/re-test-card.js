import { LitElement, html } from 'lit-element';
import { ReTestCardStyles } from './re-test-card-styles.js';

export class ReTestCard extends LitElement {
	static get styles() {
		return [ReTestCardStyles];
	}
	static get properties() {
		return {
			cardIsActive: { type: Boolean },
			tenant: Object,
			payments: Array
		};
	}
	constructor() {
		super();
		this.cardIsActive = false;
		this.tenant = false;
		this.payments = false;
	}

	render() {
		return html`
			<div class=${`card  ${this.cardIsActive ? 'cardActive' : null}`}>
				<section id="cardHeader" @click=${this.handleCardActivation}>
					<span class="cardAvatarContainer">
						<span class="cardAvatar"></span>
					</span>
					<span class="cardHeaderTextContainer">
						<div class="cardHeaderTitle">${this.tenant.first_name} ${this.tenant.last_name}</div>
						<div class="cardHeaderSupportingText">${this.tenant.email}</div>
					</span>
				</section>

				<section class="nonSharedContent">
					${this.renderPayments()}
				</section>
			</div>
		`;
	}
	renderPayments() {
		return this.payments.map(payment => {
			const date = new Date(payment.date);
			return html`
				<div class="paymentHolder">
					<span> ${date.toDateString()}</span>
					<span>€ ${payment.amount}</span>
				</div>
			`;
		});
	}

	handleCardActivation() {
		this.cardIsActive = !this.cardIsActive;
	}
}
customElements.define('re-test-card', ReTestCard);

/* <section class="nonSharedContent">
<section class="greySquaresContainer">
	<span class="greySquare"></span>
</section>
<div class="greyLine"></div>
</section> */
