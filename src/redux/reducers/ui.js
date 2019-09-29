import { SHOW_LOADER, HIDE_LOADER } from '../actions/ui.js';

const INITIAL_STATE = { isLoading: false };

export const ui = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOW_LOADER: {
			return { ...state, isLoading: true };
		}

		case HIDE_LOADER: {
			return { ...state, isLoading: false };
		}

		default:
			return state;
	}
};
