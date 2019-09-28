export const SET_TENANTS = 'SET_TENANTS';
export const setTenants = tenants => ({
	type: 'SET_TENANTS',
	payload: tenants
});

export const FETCH_TENANTS = 'FETCH_TENANTS';
export const FETCH_TENANTS_SUCCESS = 'FETCH_TENANTS_SUCCESS';
export const FETCH_TENANTS_ERROR = 'FETCH_TENANTS_ERROR';
export const fetchTenants = data => ({
	type: FETCH_TENANTS,
	payload: data
});
