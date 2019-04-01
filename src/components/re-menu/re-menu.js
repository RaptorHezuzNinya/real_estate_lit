import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReMenuStyles } from './re-menu-styles';
import { normalize } from '../../css/normalize';
import '../re-tenants-overview/re-tenants-overview';

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
				<re-tenants-overview></re-tenants-overview>
			</main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
