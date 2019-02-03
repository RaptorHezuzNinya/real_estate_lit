import { LitElement, html } from 'lit-element/';
import { styles } from './re-app-styles';
import './re-nav-bar/re-nav-bar';
import './re-menu/re-menu';

class ReApp extends LitElement {
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

customElements.define('re-app', ReApp);
