export const FETCH_TENANTS = 'FETCH_TENANTS';
export const FETCH_TENANTS_SUCCESS = 'FETCH_TENANTS_SUCCESS';
export const FETCH_TENANTS_ERROR = 'FETCH_TENANTS_ERROR';

export const fetchTenants = () => ({
	type: FETCH_TENANTS
});

export const SET_TENANTS = 'SET_TENANTS';
export const SET_TENANTS_SUCCESS = 'SET_TENANTS_SUCCESS';
export const SET_TENANTS_ERROR = 'SET_TENANTS_ERROR';

export const setTenants = data => ({
	type: SET_TENANTS,
	payload: data
});
