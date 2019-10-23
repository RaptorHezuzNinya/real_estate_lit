import { FETCH, CREATE, TRANSFORM, SET } from './action.types.js';

export const PAYMENTS = '[Payments]';

export const fetchPayments = () => ({
	type: `${PAYMENTS} ${FETCH}`,
	meta: { entity: PAYMENTS }
});

// fetchBooks = [books] fetch
export const CREATE_PAYMENTS = `${PAYMENTS} ${CREATE}`;
export const createPayments = ({ payments }) => ({
	type: `${CREATE_PAYMENTS}`,
	payload: payments,
	meta: { entity: PAYMENTS }
});

// fetchBooks = [books] fetch
export const SET_PAYMENTS = `${PAYMENTS} ${SET}`;
export const setPayments = ({ payments, normalizeKey }) => ({
	type: `${SET_PAYMENTS}`,
	payload: payments,
	meta: { entity: PAYMENTS, normalizeKey }
});
