import { LitElement, html } from 'lit-element';

class ReMyElement extends LitElement {
	static get properties() {
		return {
			prop1: String,
			prop2: String,
			prop3: Boolean,
			prop4: String
		};
	}

	constructor() {
		super();
		this.prop1 = 'text binding';
		this.prop2 = 'mydiv';
		this.prop3 = true;
		this.prop4 = 'pie';
	}

	render() {
		return html`
			<div>
				<slot></slot>

				<h1>Header in reMyElement</h1>
			</div>
		`;
	}

	clickHandler(e) {
		console.log(e.target);
	}
}

customElements.define('re-my-element', ReMyElement);
