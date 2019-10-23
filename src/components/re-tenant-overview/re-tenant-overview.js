import { LitElement, html } from 'lit-element';
import { ReTenantOverviewStyles } from './re-tenant-overview-styles.js';
import '../re-test-card/re-test-card';

export class ReTenantOverview extends LitElement {
	static get styles() {
		return [ReTenantOverviewStyles];
	}
	static get properties() {
		return {
			tenants: Object
		};
	}

	constructor() {
		super();

		this.tenants = false;
	}

	render() {
		if (!this.tenants) return;
		return html`
			<div>
				<h3>Tenant overview section</h3>
				<p>Here you find infomation concerning your added tenants</p>
				<div class="holder">
					${this.renderTenantCards()}
				</div>
			</div>
		`;
	}

	renderTenantCards() {
		const templates = [];
		for (const key in this.tenants) {
			if (this.tenants.hasOwnProperty(key)) {
				const template = html`
					<re-test-card .tenant=${this.tenants[key]}> </re-test-card>
				`;
				templates.push(template);
			}
		}
		return templates;
	}
}
customElements.define('re-tenant-overview', ReTenantOverview);
