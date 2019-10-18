import { UPLOAD } from './action.types.js';

export const PAYMENT = '[Payment]';

export const UPLOAD_PAYMENTS = `${UPLOAD} ${PAYMENT}`;

export const uploadPayments = ({ upload, entity }) => ({
	type: `${UPLOAD_PAYMENTS}`,
	payload: upload,
	meta: { entity }
});
