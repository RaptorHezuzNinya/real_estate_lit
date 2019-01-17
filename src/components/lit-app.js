import { LitElement, html } from 'lit-element/';
import { styles } from './lit-app-styles';
import './nav-bar/nav-bar.js';
import './menu-component/menu-component.js';

class LitApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>

			<div class="app">
				<nav-bar></nav-bar>
				<div class="holder"><menu-component></menu-component></div>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
