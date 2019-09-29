import { SET_TENANTS } from '../actions/tenant';
import { arrayToObject } from '../../utils/helper.js';
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
		case SET_TENANTS: {
			const newData = arrayToObject(payload, 'id');

			return { ...state, tenants: newData };
		}
		default:
			return state;
	}
};
