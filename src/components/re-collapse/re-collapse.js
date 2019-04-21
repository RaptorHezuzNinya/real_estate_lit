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
		return {};
	}

	render() {
		return html`
			<button id="collapsible" @click="${() => this.handleClick()}">Open uploader</button>
			<div id="collapsibleContent">
				<re-form></re-form>
				<!-- <slot></slot> -->
			</div>
		`;
	}

	handleClick() {
		const y = this.shadowRoot.getElementById('collapsible');
		const x = this.shadowRoot.getElementById('collapsibleContent');

		x.style.maxHeight = `${x.scrollHeight}px`;
		// if (x.style.maxHeight) {
		// 	console.log('unicorn');

		// 	return (x.style.maxHeight = `0px`);
		// }

		// return (x.style.maxHeight = `${x.scrollHeight}px;`);
	}
}

customElements.define('re-collapse', ReCollapse);
