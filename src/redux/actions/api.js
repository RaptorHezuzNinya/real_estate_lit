export const API_REQUEST = 'API_REQUEST';
export const API_REQUEST_END = 'API_REQUEST_END';
export const API_REQUEST_START = 'API_REQUEST_START';
export const ACCESS_DENIED = 'ACCESS_DENIED';
export const API_ERROR = 'API_ERROR';

export const apiAction = ({
	data = null,
	url = '',
	method = 'GET',
	onSuccess = null,
	onFailure = null,
	label = '',
	headers = {},
	auth = false,
	activeRole = 'guest'
}) => {
	return {
		type: API_REQUEST,
		payload: data,
		meta: {
			url,
			method,
			onSuccess,
			onFailure,
			label,
			headers,
			auth,
			activeRole
		}
	};
};

export const apiRequestStart = label => ({
	type: API_REQUEST_START,
	payload: label
});

export const apiRequestEnd = label => ({
	type: API_REQUEST_END,
	payload: label
});

export const accessDenied = url => ({
	type: ACCESS_DENIED,
	payload: url
});

export const apiError = (error, label) => ({
	type: API_ERROR,
	label,
	error
});
