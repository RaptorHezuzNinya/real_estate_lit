import { LitElement, html, unsafeCSS } from 'lit-element';
import { MDCSelect } from '@material/select/index.js';
import MDCSelectStyles from './can-select-styles.scss';
import { CanSelectStyles } from './can-select-styles.js';
import { arrowIconMobileDown } from '../../assets/css/icons.js';

export class CanSelect extends LitElement {
	static get styles() {
		return [CanSelectStyles, unsafeCSS(MDCSelectStyles)];
	}

	static get properties() {
		return {
			MDCSelect: { type: Object },
			MDCSelectElement: { type: Object },
			expanded: { type: Boolean, reflect: true },
			selectOptions: { type: Object },
			preselectedOption: { type: Object }
		};
	}

	constructor() {
		super();
		this.MDCSelect = false;
		this.MDCSelectElement = false;
		this.expanded = false;
		this.selectOptions = false;
		this.preselectedOption = false;
	}

	firstUpdated() {
		this.init();
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this.MDCSelectElement) return this.MDCSelect.destroy(this.MDCSelectElement);
	}

	render() {
		if (this.MDCSelect) this.MDCSelect.layout();
		return html`
			<div class="mdc-select mdc-select--outlined">
				<i>${arrowIconMobileDown}</i>

				<select class="mdc-select__native-control">
					${!this.preselectedOption
						? html`
								<option value="" disabled selected></option>
						  `
						: ''}
					${this.renderSelectOptions()}
				</select>
				<div class="mdc-notched-outline">
					<div class="mdc-notched-outline__leading"></div>
					<div class="mdc-notched-outline__notch">
						<label class="mdc-floating-label mdc-floating-label--float-above">Kies je lening type</label>
					</div>
					<div class="mdc-notched-outline__trailing"></div>
				</div>
			</div>
		`;
	}

	init() {
		this.MDCSelectElement = this.shadowRoot.querySelector('.mdc-select');
		this.MDCSelect = new MDCSelect(this.MDCSelectElement);
		this.MDCSelect.listen('MDCSelect:change', this.handleSelectChange.bind(this));
	}

	renderSelectOptions() {
		if (!this.selectOptions) return;

		const chipTemplates = [];
		for (let key in this.selectOptions) {
			if (this.selectOptions.hasOwnProperty(key)) {
				chipTemplates.push(html`
					<option
						value=${this.selectOptions[key]['value']}
						?selected=${this.preselectedOption
							? this.selectOptions[key]['value'] === this.preselectedOption.value
							: false}
					>
						${this.selectOptions[key]['label']}
					</option>
				`);
			}
		}
		return chipTemplates;
	}

	handleSelectChange(evt) {
		const event = new CustomEvent('selection-changed-event', {
			detail: {
				value: this.MDCSelect.value
			}
		});
		this.dispatchEvent(event);
	}
}
customElements.define('can-select', CanSelect);
