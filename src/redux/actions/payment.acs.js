import { CREATE, TRANSFORM } from './action.types.js';

export const PAYMENTS = '[Payments]';

// fetchBooks = [books] fetch
export const CREATE_PAYMENTS = `${PAYMENTS} ${CREATE}`;
export const createPayments = ({ payments }) => ({
	type: `${CREATE_PAYMENTS}`,
	payload: payments,
	meta: { entity: PAYMENTS }
});

export const TRANSFORM_PAYMENTS = `${PAYMENTS} ${TRANSFORM}`;
export const transformPayments = ({ payments }) => ({
	type: `${TRANSFORM_PAYMENTS}`,
	payload: payments,
	meta: { entity: PAYMENTS }
});
