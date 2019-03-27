import { LitElement, html, css } from 'lit-element';
import { styles, hostStyles } from './re-app-styles';
import { normalize } from '../css/normalize';
import './re-menu/re-menu';
import './re-my-element/re-my-element';
import './re-nav-bar/re-nav-bar';

class ReApp extends LitElement {
	static get styles() {
		return [
			css`
				:host {
					${hostStyles}
				}
			`,
			css`
				${normalize}
			`
		];
	}

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
