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
		// dispatch(showLoader(action.type));
	}
};

const fetchTenantsSuccess = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_TENANTS_SUCCESS) {
		dispatch(setTenants(action.payload));
		// dispatch(showLoader(action.type));
	}
};

export const tenantMiddleware = [fetchTenantsFlow, fetchTenantsSuccess];
