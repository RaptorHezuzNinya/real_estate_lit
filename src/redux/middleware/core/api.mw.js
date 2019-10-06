import axios from 'axios';
import { API_ROOT } from '../../../../config/config.js';
import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.acs.js';

export const apiMiddleware = ({ dispatch }) => next => action => {
	next(action);
	if (action.type.includes(API_REQUEST)) {
		const { body, url, method, feature, headers } = action.meta;
		// 	const { url, method, onSuccess, onFailure, label, headers } = action.meta;

		// 	const data = action.payload;
		// const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

		axios.defaults.baseURL = API_ROOT;
		axios.defaults.headers.common['Content-Type'] = 'application/json';

		fetch(url, { body, method });

		axios
			.request({
				url,
				method,
				headers,
				body
			})
			.then(response => response.json())
			.then(response => dispatch(apiSuccess({ response, feature })))
			.catch(error => dispatch(apiError({ error: error, feature })));

		// .then(({ data }) => {
		// 	if (label) dispatch(apiRequestEnd(label));
		// 	dispatch({ type: onSuccess, payload: data });
		// })
		// .catch(error => {
		// 	console.log('error', error);
		// 	console.log('errror.response', error.response);
		// 	if (label) dispatch(apiRequestEnd(label));
		// 	dispatch({ type: onFailure, error: error.response });

		// 	if (error.response && error.response.status === 403) {
		// 		dispatch(accessDenied(window.location.pathname));
		// 	}
		// });
	}
};
