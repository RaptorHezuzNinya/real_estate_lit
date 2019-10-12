import { LitElement, html } from 'lit-element';
import { ReListStyles } from './re-list-styles.js';
import '../re-list-item/re-list-item.js';

class ReList extends LitElement {
	static get styles() {
		return [ReListStyles];
	}
	static get properties() {
		return {
			listItems: { type: Array },
			link: { type: Boolean, reflect: true },
			property: { type: String },
			MDCList: { type: Boolean },
			klass: { type: String }
		};
	}

	constructor() {
		super();
		this.listItems = null;
		this.link = false;
		this.property = false;
		this.klass = '';
	}

	render() {
		if (this.listItems) {
			return html`
				<ul class="mdc-list">
					${this.listItems.map((item, index) => {
						return html`
							<re-list-item .listItem=${item} .index=${index}></re-list-item>
							<hr class="mdc-list-divider" />
						`;
					})}
				</ul>
			`;
		}
	}
}

customElements.define('re-list', ReList);
