import { GET_TENANTS, SET_TENANTS } from '../actions/tenant.js';
import { INITIAL_STATE } from '../initialState';

export const tenantReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_TENANTS:
			break;

		case SET_TENANTS:
			let newState = state.tenants.concat(payload);
			return Object.assign({}, { tenants: [...newState] });

		default:
			return state;
	}
};
