import { LitElement, html } from 'lit-element';
import { ReMenuStyles } from './re-user-menu-styles.js';
import '../re-list/re-list.js';

export class ReUserMenu extends LitElement {
	static get styles() {
		return [ReMenuStyles];
	}

	static get properties() {
		return {
			listItems: { type: Array }
		};
	}

	constructor() {
		super();
		this.listItems = [
			{ url: '/tenants/create', label: 'add tenant' },
			{ url: '/tenants/overview', label: 'tenants overview' }
		];
	}

	render() {
		return html`
			<re-list .listItems=${this.listItems}></re-list>
		`;
	}
}
customElements.define('re-user-menu', ReUserMenu);
