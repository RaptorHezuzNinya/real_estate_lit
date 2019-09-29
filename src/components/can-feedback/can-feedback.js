import { LitElement, html } from 'lit-element';

import { CanFeedbackStyles } from './can-feedback-styles.js';

class CanFeedback extends LitElement {
	static get styles() {
		return [CanFeedbackStyles];
	}
	static get properties() {
		return {
			_feedbackText: { type: String },
			_showIcon: { type: Boolean },
			_icon: { type: Object },
			_showFeedback: { type: Boolean },
			_warning: { type: String }
		};
	}

	constructor() {
		super();
		this._showIcon = false;
		this._icon = null;
		this._feedbackText = 'Opgeslagen!';
		this._showFeedback = true;
	}

	render() {
		return html`
			<div ?hidden="${!this._showFeedback}">
				<slot></slot>
				<i ?hidden="${!this._showIcon}">${this._icon}</i>
				<p>${this._feedbackText}</p>
			</div>
		`;
	}
}

customElements.define('can-feedback', CanFeedback);
