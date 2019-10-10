import { LitElement, html } from 'lit-element';
import { ReUserDashboardStyles } from './re-user-dashboard-styles.js';

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
			<p>userdashbaordd</p>
		`;
	}
}
customElements.define('re-user-dashboard', ReUserDashboard);
