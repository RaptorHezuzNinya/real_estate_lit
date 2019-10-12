import {
	SET_PAGE,
	UPDATE_OFFLINE,
	OPEN_SNACKBAR,
	CLOSE_SNACKBAR,
	SET_DRAWER
} from '../actions/app.acs.js';

const INITIAL_STATE = {
	currentPage: { page: '' },
	offline: false,
	drawerOpen: false,
	snackbaropen: false,
	uploadSuccess: null
};

export const appReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_DRAWER: {
			// console.log(action.payload);
			// debugger;
			const newState = {
				...state,
				drawerOpen: action.payload.state
			};
			console.log('newState! -> ', newState);

			return newState;
		}

		case SET_PAGE: {
			return {
				...state,
				currentPage: { page: action.payload }
			};
		}
		case UPDATE_OFFLINE: {
			return {
				...state,
				offline: action.offline
			};
		}

		case OPEN_SNACKBAR: {
			return {
				...state,
				snackbaropen: true
			};
		}
		case CLOSE_SNACKBAR: {
			return {
				...state,
				snackbaropen: false
			};
		}

		default:
			return state;
	}
};
