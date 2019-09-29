import { LitElement, html } from 'lit-element';
import { CanExampleComponentStyles } from './can-example-component-styles';

class CanExampleComponent extends LitElement {
	static get properties() {
		return {
			prop1: { type: String, reflect: true },
			prop2: { type: Number, reflect: true },
			prop3: { type: Boolean, reflect: true },
			prop4: { type: Array, reflect: true },
			prop5: { type: Object, reflect: true }
		};
	}
	static get styles() {
		return [CanExampleComponentStyles];
	}
	constructor() {
		super();
		this.prop1 = '';
		this.prop2 = 0;
		this.prop3 = false;
		this.prop4 = [];
		this.prop5 = {};
	}

	attributeChangedCallback(name, oldval, newval) {
		console.log('attribute change: ', name, newval);
		super.attributeChangedCallback(name, oldval, newval);
	}

	render() {
		return html`
			<div>
				<slot name="testslot"></slot>
				<p>tweede text</p>
			</div>
		`;
	}

	changeAttributes() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.getAttribute('prop3');

		this.setAttribute('prop1', randy.toString());
		this.setAttribute('prop2', randy.toString());
		this.setAttribute('prop3', myBool ? '' : null);
		this.setAttribute('prop4', JSON.stringify([...this.prop4, randy]));
		this.setAttribute(
			'prop5',
			JSON.stringify(Object.assign({}, this.prop5, { [randy]: randy }))
		);
		this.requestUpdate();
	}

	changeProperties() {
		let randy = Math.floor(Math.random() * 10);
		let myBool = this.prop3;

		this.prop1 = randy.toString();
		this.prop2 = randy;
		this.prop3 = !myBool;
		this.prop4 = [...this.prop4, randy];
		this.prop5 = Object.assign({}, this.prop5, { [randy]: randy });
	}

	updated(changedProperties) {
		changedProperties.forEach((oldValue, propName) => {
			console.log(`${propName} changed. oldValue: ${oldValue}`);
		});
	}
}

customElements.define('can-example-component', CanExampleComponent);
