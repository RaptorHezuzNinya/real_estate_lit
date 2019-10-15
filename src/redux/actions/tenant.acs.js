import { FETCH, CREATE, SET } from './types.js';

export const TENANTS = '[Tenants]';

export const CREATE_TENANTS = `${TENANTS} ${CREATE}`;
export const FETCH_TENANTS = `${TENANTS} ${FETCH}`;
export const SET_TENANTS = `${TENANTS} ${SET}`;

export const fetchTenants = obj => ({
	type: FETCH_TENANTS,
	payload: obj,
	meta: { entity: TENANTS }
});

export const setTenants = ({ tenants, normalizeKey }) => ({
	type: SET_TENANTS,
	payload: tenants,
	meta: { entity: TENANTS, normalizeKey }
});

export const createTenants = tenant => ({
	type: CREATE_TENANTS,
	payload: tenant,
	meta: { entity: TENANTS }
});
