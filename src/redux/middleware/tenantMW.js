import { apiAction } from '../actions/api';
import {
	FETCH_TENANTS,
	FETCH_TENANTS_SUCCESS,
	FETCH_TENANTS_ERROR,
	setTenants
} from '../actions/tenant.js';

const fetchTenantsFlow = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_TENANTS) {
		dispatch(
			apiAction({
				url: `/tenants/`,
				onSuccess: FETCH_TENANTS_SUCCESS,
				onFailure: FETCH_TENANTS_ERROR,
				label: FETCH_TENANTS
			})
		);
	}
};

const fetchTenantsSuccess = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_TENANTS_SUCCESS) {
		dispatch(setTenants(action.payload));
	}
};

export const tenantMiddleware = [fetchTenantsFlow, fetchTenantsSuccess];
