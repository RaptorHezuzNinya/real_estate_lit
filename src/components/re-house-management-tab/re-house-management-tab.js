import { LitElement, html } from 'lit-element';
import { ReHouseManagementTabStyles } from './re-house-management-tab-styles.js';
export class ReHouseManagementTab extends LitElement {
	static get styles() {
		return [ReHouseManagementTabStyles];
	}

	render() {
		return html`
			<div>
				<p>house management tab</p>
			</div>
		`;
	}
}
customElements.define('re-house-management-tab', ReHouseManagementTab);
