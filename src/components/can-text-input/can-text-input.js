import { LitElement, html, unsafeCSS } from 'lit-element';
import { normalize } from '../../assets/css/normalize.js';
import { CanTextInputStyles } from './can-text-input-styles.js';
import MDCTextFieldStyles from './can-text-input-styles.scss';
import { MDCTextField } from '@material/textfield';
import { MDCTextFieldCharacterCounter } from '@material/textfield/character-counter';

class CanTextInput extends LitElement {
	static get styles() {
		return [normalize, CanTextInputStyles, unsafeCSS(MDCTextFieldStyles)];
	}
	static get properties() {
		return {
			helperText: { type: String },
			label: { type: String },
			counter: { type: Boolean },
			requiredField: { type: Boolean },
			inputValue: { type: String },
			maxCharacterCount: { type: Number },
			MDCCharacterCounter: { type: Object },
			MDCTextField: { type: Object },
			MDCTextFieldElement: { type: Object },
			inputType: { type: String }
		};
	}

	constructor() {
		super();
		this.helperText = false;
		this.label = false;
		this.counter = false;
		this.maxCharacterCount = null;
		this.requiredField = false;
		this.inputValue = null;
		this.MDCCharacterCounter = false;
		this.MDCTextField = false;
		this.MDCTextFieldElement = false;
		this.inputType = 'text';
	}

	firstUpdated() {
		this.MDCTextFieldElement = this.shadowRoot.querySelector('.mdc-text-field');
		this.MDCTextField = new MDCTextField(this.MDCTextFieldElement);
		this.MDCTextField.layout();
		if (this.counter) {
			this.MDCCharacterCounter = new MDCTextFieldCharacterCounter(
				this.shadowRoot.querySelector('.mdc-text-field-character-counter')
			);
		}
	}

	render() {
		return html`
			<div class="mdc-text-field mdc-text-field--outlined">
				<input
					id="text-field-hero-input"
					type=${this.inputType}
					class="mdc-text-field__input"
					required=${this.requiredField}
					maxlength="${this.maxCharacterCount ? this.maxCharacterCount : null}"
					.value="${this.inputValue}"
					@input="${this.handleInput}"
				/>
				<div class="mdc-notched-outline">
					<div class="mdc-notched-outline__leading"></div>
					<div class="mdc-notched-outline__notch">
						<label
							for="text-field-hero-input"
							class="mdc-floating-label mdc-floating-label--float-above"
							>${this.label}</label
						>
					</div>
					<div class="mdc-notched-outline__trailing"></div>
				</div>
			</div>

			<div class="mdc-text-field-helper-line">
				${this.helperText
					? html`
							<div class="mdc-text-field-helper-text">
								${this.helperText}
							</div>
					  `
					: ''}
				${this.counter
					? html`
							<div class="mdc-text-field-character-counter"></div>
					  `
					: ''}
			</div>
		`;
	}

	handleInput(evt) {
		this.inputValue = evt.target.value;
		const inputChange = new CustomEvent('input-value-change', {
			detail: {
				value: this.inputValue
			},
			bubbles: true,
			composed: true
		});
		this.dispatchEvent(inputChange);
	}

	// firstUpdated() {
	// 	this.MDCTextFieldElement = this.shadowRoot.querySelector('.mdc-text-field');
	// 	this.MDCTextField = new MDCTextField(this.MDCTextFieldElement);
	// 	if (this.counter) {
	// 		this.MDCCharacterCounter = new MDCTextFieldCharacterCounter(
	// 			this.shadowRoot.querySelector('.mdc-text-field-character-counter')
	// 		);
	// 	}
	// }

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.MDCTextFieldElement) return this.MDCTextField.destroy(this.MDCTextFieldElement);
		this.MDCCharacterCounter.destroy(
			this.shadowRoot.querySelector('.mdc-text-field-character-counter')
		);
	}
}

customElements.define('can-text-input', CanTextInput);
