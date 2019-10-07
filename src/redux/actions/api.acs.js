// action types
export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

// action creators
// This is Command Action!
export const apiRequest = ({ body, method = 'GET', url, entity, headers = null }) => ({
	type: `${entity} ${API_REQUEST}`,
	payload: body,
	meta: { method, url, entity, headers }
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
