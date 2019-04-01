import { LitElement, html, css } from 'lit-element';
import { normalize } from '../../css/normalize';
import { navBarStyles, hostStyles } from './re-nav-bar-styles';

class ReNavBar extends LitElement {
	static get styles() {
		return [
			css`
				${normalize}
			`,
			css`
				:host {
					${hostStyles}
				}
			`,
			css`
				${navBarStyles}
			`
		];
	}

	render() {
		return html`
			<div class="nav-bar">
				<p>icon 1</p>
				<p>icon 2</p>
			</div>
		`;
	}
}

customElements.define('re-nav-bar', ReNavBar);
