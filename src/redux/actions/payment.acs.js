import { UPLOAD } from './action.types.js';

export const PAYMENT = '[Payment]';

export const UPLOAD_PAYMENTS = `${PAYMENT} ${UPLOAD}`;

export const uploadPayments = file => {
	debugger;
	return {
		type: `${UPLOAD_PAYMENTS}`,
		payload: file,
		meta: { entity: PAYMENT }
	};
};
