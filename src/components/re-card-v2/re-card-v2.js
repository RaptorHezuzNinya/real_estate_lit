import { LitElement, html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { ReCardV2Styles } from './re-card-v2-styles.js';

export class ReCardV2 extends LitElement {
	static get styles() {
		return [ReCardV2Styles];
	}
	static get properties() {
		return {
			cardIsActive: { type: Boolean },
			title: String,
			supportText: String,
			content: Array
		};
	}
	constructor() {
		super();
		this.cardIsActive = false;
		this.supportText = '';
		this.content = false;
	}

	render() {
		let classes = { card: true, cardActive: this.cardIsActive };
		return html`
			<div class=${classMap(classes)}>
				<section class="cardHeader" @click=${this.activateCard}>
					<span class="container">
						<div class="title">${this.title}</div>
						${this.supportText
							? html`
									<div class="supportText">${this.supportText}</div>
							  `
							: ''}
					</span>
				</section>

				<section class="cardContent">
					${this.renderCardContent()}
				</section>
			</div>
		`;
	}

	renderCardContent() {
		if (this.content) {
			const templates = [];
			for (let index = 0; index < this.content.length; index++) {
				const template = this.content[index];
				templates.push(template);
			}
			return templates;
		}
	}

	activateCard() {
		this.cardIsActive = !this.cardIsActive;
	}
}
customElements.define('re-card-v2', ReCardV2);
