import { FETCH, CREATE, SET } from './types.acs';

export const TENANTS = '[Tenants]';

export const CREATE_TENANTS = `${TENANTS} ${CREATE}`;
export const FETCH_TENANTS = `${TENANTS} ${FETCH}`;
export const SET_TENANTS = `${TENANTS} ${SET}`;
export const SET_TENANT = `${TENANTS} ${SET}`;

export const fetchTenants = obj => ({
	type: FETCH_TENANTS,
	payload: obj,
	meta: { entity: TENANTS }
});

export const setTenants = tenants => ({
	type: SET_TENANTS,
	payload: tenants,
	meta: { entity: TENANTS }
});

export const setTenant = tenant => ({
	type: SET_TENANT,
	payload: tenant,
	meta: { entity: TENANTS }
});

export const createTenants = tenant => ({
	type: CREATE_TENANTS,
	payload: tenant,
	meta: { entity: TENANTS }
});
