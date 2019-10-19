// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// This is Command Action!
export const apiRequest = ({ body, url, entity, method = 'GET', headers = {}, auth = false }) => ({
	type: `${entity} ${API_REQUEST}`,
	payload: body,
	meta: { method, url, entity, headers, auth }
});

// This is Event Action!
export const apiSuccess = ({ response, entity }) => ({
	type: `${entity} ${API_SUCCESS}`,
	payload: response,
	meta: { entity }
});

// This is Event Action!
export const apiError = ({ error, entity }) => ({
	type: `${entity} ${API_ERROR}`,
	payload: error,
	meta: { entity }
});
