import { LitElement, html, unsafeCSS } from 'lit-element';
import { MDCSwitch } from '@material/switch/index.js';
import { CanSwitchStyles } from './can-switch-styles.js';
import MDCSwitchStyles from './can-switch-styles.scss';

export class CanSwitch extends LitElement {
	static get styles() {
		return [CanSwitchStyles, unsafeCSS(MDCSwitchStyles)];
	}

	static get properties() {
		return {
			MDCSwitch: { type: Object },
			checked: { type: Boolean }
		};
	}

	constructor() {
		super();
		this.MDCSwitch = false;
		this.checked = false;
	}

	render() {
		console.log('rerendered --> :', this);
		return html`
			<div class="mdc-switch">
				<div class="mdc-switch__track"></div>
				<div class="mdc-switch__thumb-underlay">
					<div class="mdc-switch__thumb">
						<input
							@input=${this.handleSwitchChange}
							type="checkbox"
							id="basic-switch"
							class="mdc-switch__native-control"
							role="switch"
						/>
					</div>
				</div>
			</div>
			<label for="basic-switch">combi uit / combi aan</label>
		`;
	}

	handleSwitchChange() {
		this.checked = !this.checked;
		const event = new CustomEvent('switch-change-event', {
			detail: {
				switchChecked: this.checked
			}
		});
		this.dispatchEvent(event);
	}

	firstUpdated() {
		this.MDCSwitch = new MDCSwitch(this.shadowRoot.querySelector('.mdc-switch'));
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		const MDCSwitchElement = this.shadowRoot.querySelector('.mdc-switch');
		if (MDCSwitchElement) return this.MDCSwitch.destroy(MDCSwitchElement);
	}
}
customElements.define('can-switch', CanSwitch);
