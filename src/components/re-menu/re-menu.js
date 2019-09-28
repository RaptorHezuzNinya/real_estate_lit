import { LitElement, html, css } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { ReMenuStyles } from './re-menu-styles';
import '../re-tenants-overview/re-tenants-overview';
import '../re-form/re-form';
import '../re-collapse/re-collapse';

class ReMenu extends connect(store)(LitElement) {
	static get styles() {
		return [ReMenuStyles];
	}

	render() {
		return html`
			<main class="main-holder">
				<re-collapse>
					<re-form></re-form>
				</re-collapse>
				<re-tenants-overview></re-tenants-overview>
			</main>
		`;
	}
}

customElements.define('re-menu', ReMenu);
