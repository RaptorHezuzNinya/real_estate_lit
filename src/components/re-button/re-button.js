import { LitElement, html, unsafeCSS } from 'lit-element';
import { normalize } from '../../assets/css/normalize.js';
import { CanButtonV2Styles } from './re-button-styles.js';
import MDCButtonStyles from './re-button-styles.scss';
import { MDCRipple } from '@material/ripple';

class CanButtonV2 extends LitElement {
	static get styles() {
		return [normalize, , CanButtonV2Styles, unsafeCSS(MDCButtonStyles)];
	}

	static get properties() {
		return {
			green: { type: Boolean, reflect: true },
			disabled: { type: Boolean },
			MDCRipple: { type: Object },
			label: String
		};
	}

	constructor() {
		super();
		this.green = false;
		this.disabled = false;
		this.MDCRipple = false;
		this.label = false;
	}

	render() {
		return html`
			<button
				class="mdc-button mdc-button--raised"
				?disabled="${this.disabled}"
				@click=${this.handleClick}
				type="button"
			>
				<!-- <slot name="text"></slot>
				<slot name="icon"></slot> -->
				<span class="mdc-button__label">${this.label}</span>
			</button>
		`;
	}

	firstUpdated() {
		this.MDCRipple = new MDCRipple(this.shadowRoot.querySelector('.mdc-button'));
	}

	handleClick() {
		const event = new CustomEvent('button-click', {
			detail: { message: 'btn-click-event' },
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(event);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		const buttonElement = this.shadowRoot.querySelectorAll('.mdc-button');
		if (buttonElement) return this.MDCRipple.destroy(buttonElement);
	}
}

customElements.define('re-button', CanButtonV2);
