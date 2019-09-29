import { SET_TENANTS } from '../actions/tenant.js';

const INITIAL_STATE = {
	tenants: false
};

export const tenant = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TENANTS: {
			return {
				...state,
				tenants: action.payload
			};
		}

		default:
			return state;
	}
};
