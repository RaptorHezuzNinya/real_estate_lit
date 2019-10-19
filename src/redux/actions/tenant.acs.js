import { FETCH, CREATE, SET } from './action.types.js';

export const TENANT = '[Tenant]';
export const TENANTS = '[Tenants]';

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

// should always be ({data}) data = {tenants: {}}
export const CREATE_TENANT = `${TENANT} ${CREATE}`;
export const CREATE_TENANTS = `${TENANTS} ${CREATE}`;
export const createTenants = ({ data, multiple }) => {
	debugger;
	return {
		type: `${multiple ? CREATE_TENANTS : CREATE_TENANT}`,
		payload: data,
		meta: { entity: TENANTS }
	};
};
