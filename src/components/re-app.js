import { LitElement, html } from 'lit-element';
import { styles } from './re-app-styles';
import './re-menu/re-menu';
import './re-my-element/re-my-element';
// import './re-nav-bar/re-nav-bar';

class ReApp extends LitElement {
	render() {
		return html`
			<style>
				${styles}
			</style>

			<div class="app">
				<re-menu></re-menu>
				<!-- <re-nav-bar id="reNavBar"></re-nav-bar> -->
			</div>
		`;
	}
}

customElements.define('re-app', ReApp);
