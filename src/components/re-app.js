import { LitElement, html, css } from 'lit-element';
import { appStyles, hostStyles } from './re-app-styles';

import './re-menu/re-menu';
import './re-card/re-card';
import './re-nav-bar/re-nav-bar';
import './re-filter-bar/re-filter-bar';

class ReApp extends LitElement {
	static get styles() {}

	render() {
		return html`
			<div class="app">
				<header>
					<re-nav-bar></re-nav-bar>
					<re-filter-bar></re-filter-bar>
				</header>
				<re-card></re-card>
				<re-menu></re-menu>
			</div>
		`;
	}
}

customElements.define('re-app', ReApp);
