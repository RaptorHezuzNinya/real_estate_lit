import { FETCH, CREATE, SET } from './action.types.js';

export const TENANT = '[Tenant]';
export const TENANTS = '[Tenants]';

export const createTenants = ({ tenants, multiple }) => {
	return {
		type: `${multiple ? `${TENANTS} ${CREATE}` : `${TENANT} ${CREATE}`}`,
		payload: tenants,
		meta: { entity: multiple ? TENANTS : TENANT }
	};
};

export const FETCH_TENANTS = `${TENANTS} ${FETCH}`;
export const fetchTenants = obj => ({
	type: FETCH_TENANTS,
	payload: obj,
	meta: { entity: TENANTS }
});

export const SET_TENANTS = `${TENANTS} ${SET}`;
export const setTenants = ({ tenants, normalizeKey }) => ({
	type: SET_TENANTS,
	payload: tenants,
	meta: { entity: TENANTS, normalizeKey }
});
