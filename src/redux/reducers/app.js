import {
	UPDATE_PAGE,
	UPDATE_OFFLINE,
	OPEN_SNACKBAR,
	CLOSE_SNACKBAR,
	UPDATE_DRAWER_STATE
} from '../actions/app.js';

const INITIAL_STATE = {
	currentPage: { page: '' },
	offline: false,
	drawerOpened: false,
	snackbarOpened: false,
	uploadSuccess: null
};

export const app = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UPDATE_PAGE: {
			return {
				...state,
				currentPage: { page: action.page }
			};
		}
		case UPDATE_OFFLINE: {
			return {
				...state,
				offline: action.offline
			};
		}
		case UPDATE_DRAWER_STATE: {
			return {
				...state,
				drawerOpened: action.opened
			};
		}
		case OPEN_SNACKBAR: {
			return {
				...state,
				snackbarOpened: true
			};
		}
		case CLOSE_SNACKBAR: {
			return {
				...state,
				snackbarOpened: false
			};
		}

		default:
			return state;
	}
};
