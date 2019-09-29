import { LitElement, html } from 'lit-element';


import { CanListItemStyles } from './can-list-item-styles';
import { failedIcon } from '../../assets/css/icons';

class CanListItem extends LitElement {
	static get styles() {
		return [CanListItemStyles];
	}
	static get properties() {
		return {
			listItem: { type: Object },
			property: { type: String },
			link: { type: Boolean }
		};
	}

	constructor() {
		super();
		this.listItem = null;
		this.property = false;
		this.link = false;
	}
	render() {
		if (this.property && this.link) {
			return html`
				<a href=${this.listItem.url} target="_blank">
					<li>${this.listItem[`${this.property}`]}</li>
				</a>
				<i @click=${this.handleDelete}>${failedIcon}</i>
			`;
		}
		return html`
			<li>${this.listItem.item}</li>
		`;
	}

	handleDelete() {
		const listItemDeleteEvent = new CustomEvent('list-item-delete-click-event', {
			detail: { message: 'list-item-delete-click-event fired!' },
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(listItemDeleteEvent);
	}
}

customElements.define('can-list-item', CanListItem);
