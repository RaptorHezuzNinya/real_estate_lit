import { LitElement, html, css } from 'lit-element';
import { navBarStyles, hostStyles } from './re-nav-bar-styles';
import '../re-button/re-button';
import '../re-input/re-input';

class ReNavBar extends LitElement {
	static get styles() {
		return [hostStyles];
	}

	constructor() {
		super();
		this.btnTextUpload = 'upload payments	';
		this.btnType = 'button';
		this.btnName = 'uploadButton';
	}

	render() {
		const { btnTextUpload, btnType, btnName } = this;
		return html`
			<div class="navBar">
				<!-- <re-button
					.btnType="${btnType}"
					.btnText="${btnTextUpload}"
					.btnName="${btnName}"
				></re-button> -->
				<!-- <re-button
					.btnType="${btnType}"
					.btnText="${btnTextUpload}"
					.btnName="${btnName}"
				></re-button> -->
			</div>
		`;
	}
}

customElements.define('re-nav-bar', ReNavBar);
