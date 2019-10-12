import { SET } from '../actions/types.acs.js';

export const APP = '[App]';

export const NAVIGATE = `${APP} navigate`;
export const SET_PAGE = `${APP} ${SET} page`;
export const SET_DRAWER = `${APP} ${SET} drawer`;
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';

export const navigate = page => ({
	type: NAVIGATE,
	payload: page,
	meta: { entity: APP }
});

export const setPage = page => ({
	type: SET_PAGE,
	payload: page,
	meta: { entity: APP }
});

export const setDrawer = state => ({
	type: SET_DRAWER,
	payload: state,
	meta: { entity: APP }
});

export const updateOffline = offline => (dispatch, getState) => {
	// Show the snackbar only if offline status changes.
	if (offline !== getState().app.offline) {
		dispatch(showSnackbar());
	}
	dispatch({
		type: UPDATE_OFFLINE,
		offline
	});
};

export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';
let snackbarTimer;
export const showSnackbar = () => dispatch => {
	dispatch({
		type: OPEN_SNACKBAR
	});
	window.clearTimeout(snackbarTimer);
	snackbarTimer = window.setTimeout(() => dispatch({ type: CLOSE_SNACKBAR }), 3000);
};
