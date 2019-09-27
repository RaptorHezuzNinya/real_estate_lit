import { LitElement, html, css } from 'lit-element';
import { hostStyles, reCollapseStyles } from './re-collapse-styles';
import { normalize } from '../../css/normalize';

class ReCollapse extends LitElement {
	static get styles() {
		return [
			css`
				${normalize}
			`,
			css`
				${hostStyles}
			`,
			css`
				${reCollapseStyles}
			`
		];
	}

	static get properties() {
		return { showContent: { type: Boolean } };
	}

	constructor() {
		super();
		this.showContent = false;
	}

	render() {
		return html`
			<button id="collapsible" @click="${() => (this.showContent = !this.showContent)}">
				Open CSV uploader
			</button>
			${this.showContent
				? html`
						<div id="collapsibleContent">
							<slot></slot>
						</div>
				  `
				: html``}
		`;
	}
}

customElements.define('re-collapse', ReCollapse);
