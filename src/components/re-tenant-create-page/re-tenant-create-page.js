import { LitElement, html } from 'lit-element';
import { ReTenantCreatePageStyles } from './re-tenant-create-page-styles.js';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import '../can-text-input/can-text-input.js';
import '../re-button/re-button.js';
import { createTenants } from '../../redux/actions/tenant.acs.js';
export class ReTenantCreatePage extends connect(store)(LitElement) {
	static get styles() {
		return [ReTenantCreatePageStyles];
	}
	static get properties() {
		return {
			email: { type: String },
			accountHolder: { type: String },
			firstName: String,
			lastName: String,
			iban: String,
			rent: Number,
			phone: Number
		};
	}
	constructor() {
		super();
		this.email = 'fennascharloo@outlook.com';
		this.accountHolder = 'F. Scharloo';
		this.firstName = 'Fenna';
		this.lastName = 'Scharloo';
		this.iban = 'NL08RABO0133380343';
		this.rent = '588.37';
		this.phone = '0612345678';
	}

	render() {
		return html`
			<div @input-value-change=${this.inputChanged}>
				<h3>Tenant create page</h3>
				<p>fill in the form and submit to save a new tenant to your account</p>
				${this.renderInputs()}
				<re-button @button-click=${this.buttonClicked} buttonLabel="Opslaan"></re-button>
			</div>
		`;
	}

	buttonClicked(evt) {
		const tenant = {
			email: this.email,
			accountHolder: this.accountHolder,
			firstName: this.firstName,
			lastName: this.lastName,
			iban: this.iban,
			rent: this.rent,
			phone: this.phone
		};
		store.dispatch(createTenants({ tenant }));
	}
	inputChanged(evt) {
		this[evt.target.id] = evt.detail.value;
		console.log('this[evt.target.id]', this[evt.target.id]);
	}
	renderInputs() {
		const data = [
			{
				id: 'email',
				label: 'email...',
				requiredField: true,
				type: 'email',
				inputValue: this.email
			},
			{
				id: 'accountHolder',
				label: 'account holder...',
				requiredField: true,
				helperText: 'Naam zoals vermeld bij de bankrekening',

				inputValue: this.accountHolder
			},
			{
				id: 'firstName',
				label: 'Voornaam..',
				requiredField: true,
				inputValue: this.firstName
			},
			{
				id: 'lastName',
				label: 'Achternaam...',
				requiredField: true,
				inputValue: this.lastName
			},
			{
				id: 'iban',
				label: 'iban...',
				requiredField: true,
				inputValue: this.iban
			},
			{
				id: 'rent',
				label: 'rent...',
				requiredField: true,
				helperText: 'Naam zoals vermeld bij de bankrekening',
				inputValue: this.rent
			},
			{
				id: 'phone',
				label: 'telefoon nummer...',
				requiredField: true,
				type: 'number',
				inputValue: this.phone
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
customElements.define('re-tenant-create-page', ReTenantCreatePage);

// const tenant = {
// 	id: id,
// 	email: email,
// 	accountHolder: accountHolder,
// 	firstName: firstName,
// 	lastName: lastName,
// 	iban: iban,
// 	rent: rent,
// 	phone: phone,
// 	referenceId: referenceId
// };
