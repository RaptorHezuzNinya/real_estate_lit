import { SET } from './action.types.js';

export const PAGE_TAB = '[Page tab]';

export const SET_TAB = `${PAGE_TAB} ${SET}`;
export const setTab = ({ tabIndex, location }) => ({
	type: SET_TAB,
	payload: tabIndex,
	meta: { entity: PAGE_TAB, location }
});
