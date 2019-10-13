import { FETCH, CREATE, SET } from './types.acs';

export const TENANTS = '[Tenants]';

export const FETCH_TENANTS = `${TENANTS} ${FETCH}`;
export const SET_TENANTS = `${TENANTS} ${SET}`;
export const CREATE_TENANTS = `${TENANTS} ${CREATE}`;

export const fetchTenants = () => ({
	type: FETCH_TENANTS,
	meta: { entity: TENANTS }
});

export const setTenants = data => ({
	type: SET_TENANTS,
	payload: data,
	meta: { entity: TENANTS }
});

export const createTenants = tenant => ({
	type: CREATE_TENANTS,
	payload: tenant,
	meta: { entity: TENANTS }
});
