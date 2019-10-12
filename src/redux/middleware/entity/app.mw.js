import { NAVIGATE, setPage, setDrawer } from '../../actions/app.acs.js';

export const appMiddleware = ({ dispatch }) => next => action => {
	next(action);

	switch (action.type) {
		case NAVIGATE: {
			const page = action.payload.page === '/' ? 'home' : action.payload.page;
			console.log('page: ', page);
			loadDispatchSetPage(dispatch, page);
			next(setDrawer({ state: false }));

			break;
		}
	}
};

const loadDispatchSetPage = (dispatch, page) => {
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
		case '/user/dashboard':
			import('../../../components/re-user-dashboard/re-user-dashboard.js');
			break;
		case '/tenants/create':
			import('../../../components/re-tenant-create-page/re-tenant-create-page.js');
			break;
		// default:
		// 	page = 'view404';
		// 	import('../../components/re-404//my-view404.js');
	}
	return dispatch(setPage(page));
};
