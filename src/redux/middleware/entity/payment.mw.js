import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { CREATE_PAYMENTS, PAYMENTS, TRANSFORM_PAYMENTS } from '../../actions/payment.acs.js';

export const paymentMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case CREATE_PAYMENTS: {
			next([
				apiRequest({
					body: action.payload,
					method: 'POST',
					url: `/api/payments/user`,
					entity: PAYMENTS,
					auth: true
				}),
				setLoader({ state: true, entity: PAYMENTS })
			]);
			break;
		}

		case `${TRANSFORM_PAYMENTS}`: {
			const newData = renameObjKeys(action.payload);
			debugger;
		}

		case `${PAYMENTS} ${API_SUCCESS}`: {
			next([]);

			break;
		}

		case `${PAYMENTS} ${API_ERROR}`: {
			next([]);
			break;
		}
	}
};
