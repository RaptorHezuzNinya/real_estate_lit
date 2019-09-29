import { LitElement, html } from 'lit-element';
import { normalize } from '../../assets/css/normalize.js';
import { CanLoaderStyles } from './can-loader-styles.js';

class CanLoader extends LitElement {
	static get styles() {
		return [normalize, CanLoaderStyles];
	}
	render() {
		return html`
			<svg>
				<circle class="loading-ball four"></circle>
				<circle class="loading-ball three"></circle>
				<circle class="loading-ball two"></circle>
				<circle class="loading-ball one"></circle>
			</svg>
		`;
	}
}

customElements.define('can-loader', CanLoader);
