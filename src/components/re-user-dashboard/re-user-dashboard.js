import { LitElement, html } from 'lit-element';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';
import '../re-user-menu/re-user-menu.js';

export class ReUserDashboard extends LitElement {
	static get styles() {
		return [ReUserDashboardStyles];
	}
	static get properties() {
		return {
			propName: { type: String }
		};
	}

	constructor() {
		super();
	}

	render() {
		return html`
			<p>user dashboard component (logged in)</p>
			<re-user-menu></re-user-menu>
		`;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
