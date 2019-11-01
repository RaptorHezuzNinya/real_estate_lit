import axios from 'axios';
import { API_ROOT, ING_API_ROOT } from '../../../../config/config.js';
import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.acs.js';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	if (action.type.includes(API_REQUEST)) {
		const { url, method, entity, headers, auth, ing } = action.meta;

		const data = action.payload;
		const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
		const store = getState();

		if (auth && store.user.user) {
			headers.Authorization = `Bearer ${store.user.user.token}`;
		}

		axios.defaults.baseURL = API_ROOT;
		axios.defaults.headers.common['Content-Type'] = 'application/json';

		if (ing) {
			axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
			headers['Digest'] = 'SHA-256=47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='; // if body of req is emtry this is default
			headers['Date'] = new Date().toGMTString();
			// `headers` are custom headers to be sent
			//   headers: {'X-Requested-With': 'XMLHttpRequest'},
		}
		axios
			.request({
				url,
				method,
				headers,
				[dataOrParams]: data
			})
			.then(({ data }) => {
				const response = data;
				// debugger;
				dispatch(apiSuccess({ response, entity }));
			})
			.catch(error => {
				console.log('error', error);
				debugger;
				dispatch(apiError({ error: error, entity }));
			});
	}
};
