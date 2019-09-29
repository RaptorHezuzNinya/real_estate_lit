export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = path => dispatch => {
	// Extract the page name from path.
	const page = path === '/' ? 're-home-page' : path.slice(1);

	// Any other info you might want to extract from the path (like page type),
	// you can do here
	dispatch(loadPage(page));
	// Close the drawer - in case the *path* change came from a link in the drawer.
	dispatch(updateDrawerState(false));
};

const loadPage = page => dispatch => {
	switch (page) {
		case 're-home-page':
			import('../../components/re-home-page/re-home-page.js').then(module => {
				// Put code in here that you want to run every time when
				// navigating to view1 after my-view1.js is loaded.
			});
			break;

		// default:
		// 	page = 'view404';
		// 	import('../../components/my-view404.js');
	}

	dispatch(updatePage(page));
};

export const updatePage = page => {
	return {
		type: UPDATE_PAGE,
		page
	};
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

export const updateDrawerState = opened => {
	return {
		type: UPDATE_DRAWER_STATE,
		opened
	};
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

// below different implementations
// export function showSnackbarPromise(subreddit) {
// 	return function (dispatch) {
// 		dispatch({
// 			type: OPEN_SNACKBAR
// 		})
// 		return new Promise((resolve, reject) => {
// 			setTimeout(() => {
// 				resolve(dispatch({ type: CLOSE_SNACKBAR }))
// 			}, 500);
// 		})

// 	}
// }

// export const showSnackbarAsyncActionTestDemo = () => dispatch => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve(dispatch({ type: OPEN_SNACKBAR }))
// 		}, 500);
// 	}).then(() => {
// 		dispatch({ type: CLOSE_SNACKBAR })
// 	});
// };
