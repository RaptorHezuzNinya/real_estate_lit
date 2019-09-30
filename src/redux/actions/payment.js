export const FETCH_PAYMENTS = 'FETCH_PAYMENTS';
export const FETCH_PAYMENTS_SUCCESS = 'FETCH_PAYMENTS_SUCCESS';
export const FETCH_PAYMENTS_ERROR = 'FETCH_PAYMENTS_ERROR';

export const fetchPayments = data => ({
	type: FETCH_PAYMENTS,
	payload: data
});

export const SET_PAYMENTS = 'SET_PAYMENTS';
export const SET_PAYMENTS_SUCCESS = 'SET_PAYMENTS_SUCCESS';
export const SET_PAYMENTS_ERROR = 'SET_PAYMENTS_ERROR';

export const setPayments = data => ({
	type: SET_PAYMENTS,
	payload: data
});
