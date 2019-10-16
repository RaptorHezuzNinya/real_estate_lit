import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { signUpUser } from '../../redux/actions/user.acs.js';
import { ReRegisterPageStyles } from './re-register-page-styles.js';
import '../can-text-input/can-text-input.js';
import '../re-card/re-card.js';

export class ReRegisterPage extends connect(store)(LitElement) {
	static get styles() {
		return [ReRegisterPageStyles];
	}
	static get properties() {
		return {
			username: { type: String },
			email: { type: String },
			password: { type: String }
		};
	}
	constructor() {
		super();
		this.username = '';
		this.email = '';
		this.password = '';
	}

	render() {
		return html`
			<h3>User Register page</h3>
			<re-card>
				<div slot="content" @input-value-change=${this.inputChanged}>
					${this.renderInputs()}
				</div>
				<re-button
					slot="action1"
					@button-click=${this.buttonClicked}
					class="mdc-card__action mdc-card__action--button"
					buttonLabel="Register"
				></re-button>
			</re-card>
		`;
	}

	inputChanged(evt) {
		this[evt.target.id] = evt.detail.value;
		evt.stopPropagation();
	}

	buttonClicked(evt) {
		const data = {
			user: {
				username: this.username,
				email: this.email,
				password: this.password
			}
		};
		store.dispatch(signUpUser(data));
	}

	renderInputs() {
		const data = [
			{
				id: 'username',
				label: 'username...',
				requiredField: true,
				helperText: false,
				inputValue: this.username
			},
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
}
customElements.define('re-register-page', ReRegisterPage);
