import { LitElement, html } from 'lit-element';
import { ReListItemStyles } from './re-list-item-styles';

class ReListItem extends LitElement {
	static get styles() {
		return [ReListItemStyles];
	}
	static get properties() {
		return {
			listItem: { type: Object },
			property: { type: String },
			link: { type: Boolean },
			index: Number
		};
	}

	constructor() {
		super();
		this.listItem = null;
		this.property = false;
		this.link = false;
		this.index = false;
	}

	render() {
		return html`
			<li class="mdc-list-item" tabindex=${this.index} @click=${this.listItemClicked}>
				<span class="mdc-list-item__text">${this.listItem.label}</span>
			</li>
		`;
	}

	listItemClicked() {
		const event = new CustomEvent('re-list-item-clicked', {
			detail: {
				value: this.listItem
			},
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(event);
	}
}

customElements.define('re-list-item', ReListItem);
