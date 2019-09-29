import { LitElement, html } from 'lit-element';

import { CanListStyles } from './can-list-styles';
import '../can-list-item/can-list-item';

class CanList extends LitElement {
	static get styles() {
		return [CanListStyles];
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
				<div>
					<ul class=${this.klass}>
						${this.listItems.map(listItem => {
							return html`
								<can-list-item
									.listItem="${listItem}"
									?link=${this.link}
									.property=${this.property}
								></can-list-item>
							`;
						})}
					</ul>
				</div>
			`;
		}
	}
}

customElements.define('can-list', CanList);
