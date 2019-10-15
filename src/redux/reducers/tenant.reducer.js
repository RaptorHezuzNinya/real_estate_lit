import { SET_TENANTS } from '../actions/tenant.acs.js';

const INITIAL_STATE = {
	tenants: false
};

export const tenantReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TENANTS: {
			return {
				...state,
				tenants: {
					...state['tenants'],
					...action.payload
				}
			};
		}

		default:
			return state;
	}
};
