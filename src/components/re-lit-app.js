import { LitElement, html } from 'lit-element/';
import { styles } from './re-lit-app-styles';
import './re-nav-bar/re-nav-bar';
import './re-menu/re-menu';

class ReLitApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>

			<div class="app">
				<re-nav-bar></re-nav-bar>
				<div class="holder"><re-menu></re-menu></div>
			</div>
		`;
	}
}

customElements.define('re-lit-app', ReLitApp);
