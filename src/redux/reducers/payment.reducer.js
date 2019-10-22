import { SET_PAYMENTS } from '../actions/payment.acs.js';

const initialState = {
	payments: false
};

export const paymentReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PAYMENTS:
			return { ...state, payments: action.payload };

		default:
			return state;
	}
};
