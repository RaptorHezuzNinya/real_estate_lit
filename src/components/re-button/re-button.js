import { LitElement, html, css } from 'lit-element';
import { normalize } from '../../css/normalize';
import { ReButtonStyles, host } from './re-button-styles';
import '../re-input/re-input';

class ReButton extends LitElement {
	static get styles() {
		return [
			css`
				${normalize}
			`,
			css`
				${ReButtonStyles}
			`
		];
	}

	static get properties() {
		return {
			btnText: { type: String }
		};
	}

	// constructor() {
	//     super();
	//     this.
	// }

	render() {
		return html`
			<div class="btn-holder">
				<button></button>
			</div>
		`;
	}
}

customElements.define('re-button', ReButton);
