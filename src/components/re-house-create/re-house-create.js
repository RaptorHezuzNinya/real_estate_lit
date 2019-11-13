import { LitElement, html } from 'lit-element';
import { ReHouseCreateStyles } from './re-house-create-styles.js';
import '../can-text-input/can-text-input.js';
import '../re-button/re-button.js';
import '../re-card-v2/re-card-v2.js';

export class ReHouseCreate extends LitElement {
	static get styles() {
		return [ReHouseCreateStyles];
	}
	static get properties() {
		return {
			house: { type: Object }
		};
	}
	constructor() {
		super();
		this.house = {
			street: 'exampleStreet',
			houseNumber: 123,
			zipCode: '3417gp',
			city: 'Montfoort',
			country: 'Nederland'
		};
	}

	render() {
		return html`
			<div @input-value-change=${this.inputChanged}>
				<re-card-v2
					.cardIsActive=${true}
					title="Add a house"
					supportText="Here you can add a house to your residence collection"
					.content=${this.renderInputs()}
				></re-card-v2>
				<re-button @button-click=${this.buttonClicked} label="Opslaan"></re-button>
			</div>
		`;
	}

	renderInputs() {
		const data = [
			{
				id: 'street',
				label: 'Street',
				inputType: 'text',
				inputValue: this.house.street,
				required: true
			},
			{
				id: 'houseNumber',
				label: 'House number',
				inputType: 'number',
				inputValue: this.house.houseNumber,
				required: true
			},
			{
				id: 'zipCode',
				label: 'zip code',
				inputType: 'text',
				inputValue: this.house.zipCode,
				required: true
			},
			{
				id: 'city',
				label: 'City',
				inputType: 'text',
				inputValue: this.house.city,
				required: true
			},
			{
				id: 'country',
				label: 'Country',
				inputType: 'text',
				inputValue: this.house.country,
				required: true
			}
		];

		const templates = data.map(input => {
			return html`
				<can-text-input
					id=${input.id}
					.label=${input.label}
					.inputType=${input.type}
					.requiredField=${input.required}
					.inputValue=${input.inputValue}
				></can-text-input>
			`;
		});
		return templates;
	}

	inputChanged(evt) {
		evt.stopPropagation();
	}
}
customElements.define('re-house-create', ReHouseCreate);
