import axios from 'axios';
import { API_ROOT } from '../../../../config/config.js';
import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.acs.js';

export const apiMiddleware = ({ dispatch }) => next => action => {
	next(action);

	if (action.type.includes(API_REQUEST)) {
		const { url, method, entity, headers } = action.meta;

		const data = action.payload;
		const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

		axios.defaults.baseURL = API_ROOT;
		axios.defaults.headers.common['Content-Type'] = 'application/json';

		axios
			.request({
				url,
				method,
				headers,
				body
			})
			.then(response => response.json())
			.then(response => dispatch(apiSuccess({ response, entity })))
			.catch(error => dispatch(apiError({ error: error, entity })));
	}
};
