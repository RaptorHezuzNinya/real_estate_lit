import { LitElement, html, unsafeCSS } from 'lit-element';
import { ReTabBarStyles } from './re-tab-bar-styles.js';
import MDCTabBarStyles from './re-tab-bar-styles.scss';
import { MDCTabBar } from '@material/tab-bar';

export class ReTabBar extends LitElement {
	static get styles() {
		return [ReTabBarStyles, unsafeCSS(MDCTabBarStyles)];
	}

	static get properties() {
		return {
			MDCTabBar: { type: Object }
		};
	}

	constructor() {
		super();
		this.MDCTabBar = false;
	}

	firstUpdated() {
		this.MDCTabBar = new MDCTabBar(this.shadowRoot.querySelector('.mdc-tab-bar'));
		this.MDCTabBar.listen('MDCTabBar:activated', this.activeTabChanged.bind(this));
	}
	render() {
		return html`
			<div class="mdc-tab-bar" role="tablist">
				<div class="mdc-tab-scroller">
					<div class="mdc-tab-scroller__scroll-area">
						<div class="mdc-tab-scroller__scroll-content">
							<button class="mdc-tab mdc-tab--active" role="tab" aria-selected="true" tabindex="0">
								<span class="mdc-tab__content">
									<span class="mdc-tab__text-label">Tenant Overview</span>
								</span>
								<span class="mdc-tab-indicator mdc-tab-indicator--active">
									<span
										class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
									></span>
								</span>
								<span class="mdc-tab__ripple"></span>
							</button>
							<button class="mdc-tab" role="tab" aria-selected="false" tabindex="1">
								<span class="mdc-tab__content">
									<span class="mdc-tab__text-label">Upload payment</span>
								</span>
								<span class="mdc-tab-indicator mdc-tab-indicator--active">
									<span
										class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
									></span>
								</span>
								<span class="mdc-tab__ripple"></span>
							</button>
							<button class="mdc-tab " role="tab" aria-selected="false" tabindex="2">
								<span class="mdc-tab__content">
									<span class="mdc-tab__text-label">Create tenant</span>
								</span>
								<span class="mdc-tab-indicator mdc-tab-indicator--active">
									<span
										class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"
									></span>
								</span>
								<span class="mdc-tab__ripple"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
		`;
	}

	activeTabChanged(evt) {
		const event = new CustomEvent('re-active-tab-change', {
			detail: {
				value: evt.detail.index
			}
		});
		this.dispatchEvent(event);
	}
}

customElements.define('re-tab-bar', ReTabBar);
