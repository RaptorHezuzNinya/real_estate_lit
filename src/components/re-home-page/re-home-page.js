import { html, LitElement } from 'lit-element';
import { connect } from 'pwa-helpers';
import { store } from '../../redux/store';
import { PageViewElement } from '../page-view-element.js';
import { SharedStyles } from '../shared-styles.js';
import '../can-button-v2/can-button-v2.js';
import { fetchTenants } from '../../redux/actions/tenant';

class ReHomePage extends connect(store)(PageViewElement) {
	static get styles() {
		return [SharedStyles];
	}

	connectedCallback() {
		super.connectedCallback();
		store.dispatch(fetchTenants());
	}

	render() {
		return html`
			<section>
				<p>section 1</p>
				<h2>Static page</h2>
				<p>This is a text-only page.</p>
				<p>
					It doesn't do asdfsdfdsnything other than display some static text.
				</p>
				<can-button-v2>Works</can-button-v2>
			</section>
			<section>
				<p>section 2</p>
			</section>
			<section>
				<p>section 3</p>
			</section>
		`;
	}
}

window.customElements.define('re-home-page', ReHomePage);
