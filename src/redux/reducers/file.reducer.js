import { SET_TAB } from '../actions/pageTab.acs.js';

const initialState = {
	x: { activeTab: 0 }
};

export const fileReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
