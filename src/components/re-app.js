import { LitElement, html, css } from 'lit-element';
import { appStyles, hostStyles } from './re-app-styles';
import { normalize } from '../css/normalize';
import './re-menu/re-menu';
import './re-nav-bar/re-nav-bar';
import './re-filter-bar/re-filter-bar';

class ReApp extends LitElement {
	static get styles() {
		return [
			css`
				${normalize}
			`
			// css`
			// 	:host {
			// 		${hostStyles}
			// 	}
			// `,
			// css`
			// 	${appStyles}
			// `
		];
	}

	render() {
		return html`
			<div class="app">
				<header>
					<re-nav-bar></re-nav-bar>
					<re-filter-bar></re-filter-bar>
				</header>
				<re-menu></re-menu>
			</div>
		`;
	}
}

customElements.define('re-app', ReApp);
