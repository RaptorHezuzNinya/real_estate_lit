import { LitElement, html, css } from 'lit-element';
import { hostStyles, reCollapseStyles } from './re-collapse-styles';
import { normalize } from '../../css/normalize';

class ReCollapse extends LitElement {
	static get styles() {
		return [
			css`
				${normalize}
			`,
			// css`
			// 	// ${hostStyles}
			// `
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
		this.showContent = true;
	}

	render() {
		return html`
			<button id="collapsible" @click="${() => this.handleClick()}">Open uploader</button>
			${this.showContent
				? html`
						<div>
							<re-form></re-form>
						</div>
				  `
				: html``}
		`;
	}

	handleClick() {
		return (this.showContent = !this.showContent);
	}
}

customElements.define('re-collapse', ReCollapse);
