import axios from 'axios';
import { API_ROOT } from '../../../config/config.js';
import { API_REQUEST, accessDenied, apiRequestStart, apiRequestEnd } from '../actions/api';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);
	if (action.type !== API_REQUEST) return;

	const { url, method, onSuccess, onFailure, label, headers, activeRole, auth } = action.meta;

	const data = action.payload;

	const store = getState();
	if (auth && store.user.user) headers.Authorization = store.user.user.token;

	const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

	axios.defaults.baseURL = API_ROOT;
	axios.defaults.headers.common['Content-Type'] = 'application/json';
	axios.defaults.headers.common['activeRole'] = activeRole;

	if (label) dispatch(apiRequestStart(label));

	axios
		.request({
			url,
			method,
			headers,
			[dataOrParams]: data
		})
		.then(({ data }) => {
			if (label) dispatch(apiRequestEnd(label));
			dispatch({ type: onSuccess, payload: data });
		})
		.catch(error => {
			console.log('error', error);
			console.log('errror.response', error.response);
			if (label) dispatch(apiRequestEnd(label));
			dispatch({ type: onFailure, error: error.response });

			if (error.response && error.response.status === 403) {
				dispatch(accessDenied(window.location.pathname));
			}
		});
};
