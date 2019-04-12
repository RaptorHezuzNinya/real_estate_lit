import { LitElement, html, css } from 'lit-element';
import { normalize } from '../../css/normalize';
import { navBarStyles, hostStyles } from './re-nav-bar-styles';
import '../re-button/re-button';

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
				<re-button .btnText="list"></re-button>
				<re-button .btnText="upload"></re-button>
			</div>
		`;
	}
}

customElements.define('re-nav-bar', ReNavBar);
