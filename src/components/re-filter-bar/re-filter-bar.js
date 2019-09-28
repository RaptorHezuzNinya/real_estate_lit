import { LitElement, html, css } from 'lit-element';

import { filterBarStyles } from './re-filter-bar-styles';

class ReFilterBar extends LitElement {
	static get styles() {
		return [filterBarStyles];
	}

	constructor() {
		super();
		this.months = [
			{ 1: 'January' },
			{ 2: 'February' },
			{ 3: 'March' },
			{ 4: 'April' },
			{ 5: 'May' },
			{ 6: 'June' },
			{ 7: 'July' },
			{ 8: 'August' },
			{ 9: 'September' },
			{ 10: 'October' },
			{ 11: 'November' },
			{ 12: 'December' }
		];
		this.years = [{ 2015: '2015' }, { 2016: '2016' }, { 2017: '2017' }, { 2018: '2018' }];
	}

	render() {
		const { months, years } = this;
		return html`
			<div class="filter-bar">
				<re-select-box .selectBoxOptions=${years}></re-select-box>
				<re-select-box .selectBoxOptions=${months}></re-select-box>
			</div>
		`;
	}
}

customElements.define('re-filter-bar', ReFilterBar);
