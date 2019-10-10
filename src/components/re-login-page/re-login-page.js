import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReLoginPageStyles } from './re-login-page-styles.js';
import '../can-text-input/can-text-input.js';
import '../re-card/re-card.js';
import '../re-button/re-button.js';
import { loginUser } from '../../redux/actions/user.acs.js';

export class ReLoginPage extends connect(store)(LitElement) {
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
		this.email = 'w@c.nl';
		this.password = 'x';
	}

	render() {
		return html`
			<p>User login page</p>
			<re-card>
				<div slot="content" @input-value-change=${this.inputChanged}>
					${this.renderInputs()}
				</div>
				<div class="footer">
					<re-button
						@button-click=${this.buttonClicked}
						class="mdc-card__action mdc-card__action--button"
						buttonLabel="Login"
					></re-button>
					<a class="register" buttonLabel="Register" href="/register">register</a>
				</div>
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
				email: this.email,
				password: this.password
			}
		};

		store.dispatch(loginUser(data));
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
}
customElements.define('re-login-page', ReLoginPage);
