import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';

import { UPLOAD_PAYMENTS, PAYMENT } from '../../actions/payment.acs.js';

export const paymentMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case UPLOAD_PAYMENTS: {
			const file = { ...action.payload };
			next([
				apiRequest({
					body: file,
					method: 'POST',
					url: `/api/payments/user/upload`,
					entity: PAYMENT,
					auth: true
				}),
				setLoader({ state: true, entity: PAYMENT })
			]);
			break;
		}

		case `${PAYMENT} ${API_SUCCESS}`: {
			next([]);

			break;
		}

		case `${PAYMENT} ${API_ERROR}`: {
			next([]);
			break;
		}
	}
};
