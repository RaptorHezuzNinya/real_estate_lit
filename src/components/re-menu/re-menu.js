import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReMenuStyles } from './re-menu-styles';
import { normalize } from '../../css/normalize';
import '../re-tenants-overview/re-tenants-overview';
import '../re-my-element/re-my-element';

class ReMenu extends connect(store)(LitElement) {
	static get styles() {
		return [
			css`
				${normalize}
			`,
			css`
				:host {
					display: block;
				}
			`,
			css`
				${ReMenuStyles}
			`
		];
	}

	render() {
		return html`
			<main class="main-holder">
				<h1>header in re-menu</h1>
				<re-my-element>
					<br />
					<h1>Header ** AS SLOT ** in reMyElement</h1>
					<p class="textClass">paragraph as slot</p>
				</re-my-element>
				<re-tenants-overview></re-tenants-overview>
			</main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
