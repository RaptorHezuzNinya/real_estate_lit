import { LitElement, html, unsafeCSS } from 'lit-element';
import { normalize } from '../../assets/css/normalize.js';
import { CanButtonV2Styles } from './can-button-v2-styles.js';
import MDCButtonStyles from './can-button-v2-styles.scss';
import { MDCRipple } from '@material/ripple';

class CanButtonV2 extends LitElement {
	static get styles() {
		return [normalize, , CanButtonV2Styles, unsafeCSS(MDCButtonStyles)];
	}

	static get properties() {
		return {
			green: { type: Boolean, reflect: true },
			disabled: { type: Boolean },
			MDCRipple: { type: Object }
		};
	}

	constructor() {
		super();
		this.green = false;
		this.disabled = false;
		this.MDCRipple = false;
	}

	render() {
		return html`
			<button
				class="mdc-button mdc-button--raised"
				?disabled="${this.disabled}"
				@click=${this.handleClick}
				type="button"
			>
				<slot></slot>
				<slot name="text"></slot>
				<slot name="icon"></slot>
			</button>
		`;
	}

	firstUpdated() {
		this.MDCRipple = new MDCRipple(this.shadowRoot.querySelector('.mdc-button'));
	}

	handleClick() {
		const event = new CustomEvent('btn-click-event', {
			detail: { message: 'btn-click-event' }
		});
		this.dispatchEvent(event);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		const buttonElement = this.shadowRoot.querySelectorAll('.mdc-button');
		if (buttonElement) return this.MDCRipple.destroy(buttonElement);
	}
}

customElements.define('can-button-v2', CanButtonV2);
