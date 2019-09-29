import {
	FETCH_TENANTS,
	FETCH_TENANTS_SUCCESS,
	FETCH_TENANTS_ERROR,
	setTenants
} from '../actions/tenant.js';
import { arrayToObject } from '../../utils/helper.js';
import { apiAction } from '../actions/api.js';

const fetchTenantsFlow = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_TENANTS) {
		dispatch(
			apiAction({
				url: `/tenants/`,
				method: 'GET',
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
		const tenants = arrayToObject(action.payload, 'id');
		dispatch(setTenants(tenants));
	}
};
export const tenantMiddleware = [fetchTenantsFlow, fetchTenantsSuccess];
