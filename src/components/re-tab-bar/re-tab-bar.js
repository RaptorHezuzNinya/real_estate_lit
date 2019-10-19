import { LitElement, html, unsafeCSS } from 'lit-element';
import { MDCTabBar } from '@material/tab-bar';
import MDCTabBarStyles from './re-tab-bar-styles.scss';
import { ReTabBarStyles } from './re-tab-bar-styles.js';
import { classMap } from 'lit-html/directives/class-map.js';

export class ReTabBar extends LitElement {
	static get styles() {
		return [ReTabBarStyles, unsafeCSS(MDCTabBarStyles)];
	}

	static get properties() {
		return {
			MDCTabBar: { type: Object },
			tabs: Array,
			activeTab: Number
		};
	}

	constructor() {
		super();
		this.MDCTabBar = false;
		this.tabs = false;
		this.activeTab = 0;
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
							${this.renderTabs()}
						</div>
					</div>
				</div>
			</div>
		`;
	}
	renderTabs() {
		if (!this.tabs) {
			return;
		}

		return this.tabs.map(tab => {
			const active = this.activeTab === tab.tabIndex ? true : false;
			let classesButton = {
				'mdc-tab': true,
				'mdc-tab--active': active
			};
			let classesSpan = {
				'mdc-tab-indicator': true,
				'mdc-tab-indicator--active': active
			};
			return html`
				<button
					class=${classMap(classesButton)}
					role="tab"
					aria-selected="true"
					tabindex=${tab.tabIndex}
				>
					<span class="mdc-tab__content">
						<span class="mdc-tab__text-label">${tab.label}</span>
					</span>
					<span class=${classMap(classesSpan)}>
						<span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
					</span>
					<span class="mdc-tab__ripple"></span>
				</button>
			`;
		});
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
