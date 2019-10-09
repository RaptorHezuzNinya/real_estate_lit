import { LitElement, html } from 'lit-element';
import { ReLoginPageStyles } from './re-login-page-styles.js';
import '../can-text-input/can-text-input.js';
import '../re-card/re-card.js';
import '../can-button-v2/can-button-v2.js';

export class ReLoginPage extends LitElement {
	static get styles() {
		return [ReLoginPageStyles];
	}
	static get properties() {
		return {
			email: { type: String },
			password: { type: String }
		};
	}
	constructor() {
		super();
		this.email = '';
		this.password = '';
	}

	render() {
		return html`
			<p>User login page</p>
			<re-card>
				<div slot="content" @input-value-change=${this.inputChanged}>
					${this.renderInputs()}
				</div>
				<can-button-v2
					slot="action1"
					@button-click=${this.buttonClicked}
					class="mdc-card__action mdc-card__action--button"
					buttonLabel="Action 1"
				></can-button-v2>
			</re-card>
		`;
	}

	buttonClicked(evt) {
		const data = {
			user: {
				email: this.email,
				password: this.password
			}
		};
		store.dispatch(signUpUser(data));
	}

	renderInputs() {
		const data = [
			{
				id: 'email',
				label: 'email...',
				requiredField: true,
				helperText: false,
				type: 'email',
				inputValue: this.email
			},
			{
				id: 'password',
				label: 'password...',
				requiredField: true,
				helperText: false,
				type: 'password',
				inputValue: this.password
			}
		];
		return data.map(item => {
			return html`
				<can-text-input
					id=${item.id}
					.label=${item.label}
					.inputType=${item.type}
					.helperText=${item.helperText}
					.requiredField=${item.requiredField}
					.inputValue=${item.inputValue}
				></can-text-input>
			`;
		});
	}
	inputChanged(evt) {
		this[evt.target.id] = evt.detail.value;
		evt.stopPropagation();
	}
}
customElements.define('re-login-page', ReLoginPage);
