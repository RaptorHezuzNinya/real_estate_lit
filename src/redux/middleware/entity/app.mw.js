import { NAVIGATE, setPage, setDrawer } from '../../actions/app.acs.js';

export const appMiddleware = ({ dispatch }) => next => action => {
	next(action);

	switch (action.type) {
		case NAVIGATE: {
			const page = action.payload.page === '/' ? 'home' : action.payload.page.slice(1);
			loadPage(page);
			dispatch(setPage(page));
			dispatch(setDrawer({ state: false }));
			break;
		}
	}
};

const loadPage = page => {
	switch (page) {
		// case 'view1':			 EXAMPLE to to load module or bundle per 'page'
		// 	import('../../components/my-view1.js').then(module => {
		// 		// Put code in here that you want to run every time when
		// 		// navigating to view1 after my-view1.js is loaded.
		// 	});
		// 	break;
		case 'home':
			import('../../../components/re-home-page/re-home-page.js');
			break;
		case 'register':
			import('../../../components/re-register-page/re-register-page.js');
			break;
		case 'login':
			// import('../../components/can-login-page/can-login-page.js');
			break;
		// default:
		// 	page = 'view404';
		// 	import('../../components/re-404//my-view404.js');
	}
};
