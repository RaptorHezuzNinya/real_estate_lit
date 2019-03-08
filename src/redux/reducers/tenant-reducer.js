import { GET_TENANTS, SET_TENANTS } from '../actions/tenant';
import { INITIAL_STATE } from '../initialState';

export const tenantReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_TENANTS:
			break;
		case SET_TENANTS: {
			return {
				...state,
				payload
			};
		}
		default:
			return state;
	}
};
