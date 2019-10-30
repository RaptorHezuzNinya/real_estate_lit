import { LitElement, html } from 'lit-element';
import { ReTestCardStyles } from './re-test-card-styles.js';
import { classMap } from 'lit-html/directives/class-map.js';
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
		this.paymentsByTenant = false;
	}

	render() {
		let classes = { card: true, cardActive: this.cardIsActive };
		return html`
			<div class=${classMap(classes)}>
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
		if (this.payments) {
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
	}

	handleCardActivation() {
		this.cardIsActive = !this.cardIsActive;
	}
}
customElements.define('re-test-card', ReTestCard);
