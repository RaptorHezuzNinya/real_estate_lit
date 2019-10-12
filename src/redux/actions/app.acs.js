import { UPDATE } from '../actions/types.acs.js';
export const APP = '[App]';
export const UPDATE_DRAWER = `${APP} ${UPDATE} drawer`;
export const UPDATE_PAGE = `${APP} ${UPDATE} page`;

export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const updateDrawer = ({ state }) => ({
	type: UPDATE_DRAWER,
	payload: state
});

export const updatePage = page => ({
	type: UPDATE_PAGE,
	payload: page
});

export const navigate = path => dispatch => {
	const page = path === '/' ? 'home' : path.slice(1);
	dispatch(loadPage(page));
	dispatch(updateDrawer({ state: false }));
};

const loadPage = page => dispatch => {
	switch (page) {
		// case 'view1':			 EXAMPLE to to load module or bundle per 'page'
		// 	import('../../components/my-view1.js').then(module => {
		// 		// Put code in here that you want to run every time when
		// 		// navigating to view1 after my-view1.js is loaded.
		// 	});
		// 	break;
		case 'home':
			import('../../components/re-home-page/re-home-page.js');
			break;
		case 'register':
			import('../../components/re-register-page/re-register-page.js');
			break;
		case 'login':
			// import('../../components/can-login-page/can-login-page.js');
			break;
		// default:
		// 	page = 'view404';
		// 	import('../../components/my-view404.js');
	}

	dispatch(updatePage(page));
};

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

let snackbarTimer;

// ORIGINAL
export const showSnackbar = () => dispatch => {
	dispatch({
		type: OPEN_SNACKBAR
	});
	window.clearTimeout(snackbarTimer);
	snackbarTimer = window.setTimeout(() => dispatch({ type: CLOSE_SNACKBAR }), 3000);
};
