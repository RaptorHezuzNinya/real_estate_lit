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
				// ${ReButtonStyles}
			`
			// css`
			// 	${host}
			// `
		];
	}

	static get properties() {
		return {
			btnText: { type: String },
			btnType: { type: String },
			btnName: { type: String }
		};
	}

	render() {
		const { btnText, btnType, btnName } = this;
		return html`
			<div class="btnHolder">
				<re-input
					.inputType="${btnType}"
					.inputName="${btnName}"
					.inputText="${btnText}"
					@click="${() => this.handleClick()}"
				></re-input>
			</div>
		`;
	}

	handleClick() {
		console.log('uncionr');
	}
}

customElements.define('re-button', ReButton);
