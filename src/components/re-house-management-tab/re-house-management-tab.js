import { LitElement, html } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store.js';
import { ReHouseManagementTabStyles } from './re-house-management-tab-styles.js';
import '../re-house-create/re-house-create.js';

export class ReHouseManagementTab extends connect(store)(LitElement) {
	static get styles() {
		return [ReHouseManagementTabStyles];
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<div>
				<p>house management tab</p>
				<re-house-create></re-house-create>
			</div>
		`;
	}
}
customElements.define('re-house-management-tab', ReHouseManagementTab);
