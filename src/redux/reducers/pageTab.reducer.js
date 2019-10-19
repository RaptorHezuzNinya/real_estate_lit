import { SET_TAB } from '../actions/pageTab.acs.js';

const initialState = {
	userDashboard: { activeTab: 0 }
};

export const pageTabReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_TAB:
			return {
				...state,
				[`${action.meta.location}`]: { activeTab: action.payload }
			};

		default:
			return state;
	}
};
