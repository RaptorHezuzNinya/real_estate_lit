import { LitElement, html } from 'lit-element';
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
				<re-menu></re-menu>
			</div>
		`;
	}
}

customElements.define('re-app', ReApp);
