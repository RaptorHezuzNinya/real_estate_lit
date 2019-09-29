import { LitElement, html } from 'lit-element';
import { normalize } from '../../assets/css/normalize';

import { CanButtonStyles } from './can-button-styles';

class CanButton extends LitElement {
	static get styles() {
		return [normalize, , CanButtonStyles];
	}

	static get properties() {
		return {
			green: { type: Boolean, reflect: true }
		};
	}

	constructor() {
		super();
		this.green = null;
	}

	render() {
		return html`
			<button>
				<slot></slot>
				<slot name="text"></slot>
				<slot name="icon"></slot>
			</button>
		`;
	}
}

customElements.define('can-button', CanButton);
