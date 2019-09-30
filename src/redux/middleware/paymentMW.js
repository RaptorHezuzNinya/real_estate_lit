import {
	FETCH_PAYMENTS,
	FETCH_PAYMENTS_SUCCESS,
	FETCH_PAYMENTS_ERROR,
	setPayments
} from '../actions/payment.js';
// import { arrayToObject } from '../../utils/helper.js';
import { apiAction } from '../actions/api.js';
import { arrayToObject } from '../../utils/helper.js';

const fetchPaymentsFlow = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_PAYMENTS) {
		dispatch(
			apiAction({
				url: `/payments/`,
				method: 'GET',
				onSuccess: FETCH_PAYMENTS_SUCCESS,
				onFailure: FETCH_PAYMENTS_ERROR,
				label: FETCH_PAYMENTS
			})
		);
	}
};
const fetchPaymentsSuccess = ({ dispatch }) => next => action => {
	next(action);
	if (action.type === FETCH_PAYMENTS_SUCCESS) {
		dispatch(setPayments(arrayToObject(action.payload, 'id')));
	}
};
export const paymentMiddleware = [fetchPaymentsFlow, fetchPaymentsSuccess];
