import { SET_TENANT } from '../actions/tenant.acs.js';

const INITIAL_STATE = {
	tenants: false
};

export const tenantsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_TENANT: {
			debugger;
			return {
				...state,
				tenants: {
					...state['tenants'],
					[action.payload.tenants.tenant.id]: {
						...action.payload.tenants.tenant
					}
				}
			};
		}

		default:
			return state;
	}
};
