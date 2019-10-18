import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { loginUser } from '../../redux/actions/user.acs.js';
import { ReLoginPageStyles } from './re-login-page-styles.js';
import '../can-text-input/can-text-input.js';
import '../re-card/re-card.js';
import '../re-button/re-button.js';
import { navigate } from '../../redux/actions/app.acs';

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
			<br />
			<br />

			<h2>User login page</h2>
			<br />
			<br />

			<re-card>
				<div slot="content" @input-value-change=${this.inputChanged}>
					${this.renderInputs()}
				</div>
				<div class="footer">
					<re-button
						@button-click=${this.loginClicked}
						class="mdc-card__action mdc-card__action--button"
						label="Login"
					></re-button>
					<re-button
						@button-click=${this.registerClicked}
						class="mdc-card__action mdc-card__action--button"
						label="register"
					></re-button>
				</div>
			</re-card>
		`;
	}

	registerClicked() {
		window.history.pushState({}, '', '/register');
		store.dispatch(navigate({ page: window.location.pathname }));
	}
	inputChanged(evt) {
		this[evt.target.id] = evt.detail.value;
		evt.stopPropagation();
	}

	loginClicked(evt) {
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
