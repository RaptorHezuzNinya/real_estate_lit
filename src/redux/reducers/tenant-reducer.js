import { GET_TENANTS, SET_TENANTS } from '../actions/tenant';

const INITIAL_STATE = {
	tenants: [
		{
			account_holder: 'Unicorn',
			email: 'unicorn@hotmail.com',
			first_name: 'unicorn',
			iban: 'NL08INGB0945874518',
			id: 11,
			last_name: 'unicorn',
			phone: '0612345678',
			rent: 747.16
		}
	]
};

export const tenantReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_TENANTS:
			break;

		case SET_TENANTS: {
			const tenants = payload.map(tenant => tenant);
			const updatedState = tenants.concat(Object.assign({}, ...state.tenants));
			return { tenants: updatedState };
		}
		default:
			return state;
	}
};
