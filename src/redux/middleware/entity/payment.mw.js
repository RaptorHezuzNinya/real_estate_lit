import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import {
	CREATE_PAYMENTS,
	PAYMENTS,
	createPayments,
	setPayments
} from '../../actions/payment.acs.js';
import { transformData, TRANSFORM_COMPLETE } from '../../actions/dataMutation.acs.js';
import { FILTER_COMPLETE } from '../../actions/dataMutation.acs.js';

export const paymentMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case CREATE_PAYMENTS: {
			next([
				apiRequest({
					body: action.payload,
					method: 'POST',
					url: `/api/payments`,
					entity: PAYMENTS,
					auth: true
				}),
				setLoader({ state: true, entity: PAYMENTS })
			]);
			break;
		}

		case `${PAYMENTS} ${FILTER_COMPLETE}`: {
			const keyMapping = {
				'Naam / Omschrijving': 'name',
				Tegenrekening: 'iban',
				Datum: 'date',
				'Af Bij': 'credited',
				'Bedrag (EUR)': 'amount',
				Mededelingen: 'memo'
			};
			next(transformData({ data: action.payload, entity: PAYMENTS, keyMapping }));
			break;
		}

		case `${PAYMENTS} ${TRANSFORM_COMPLETE}`: {
			const { entity } = action.meta;

			dispatch(createPayments({ payments: action.payload, entity }));
			dispatch(setLoader({ state: true, entity }));

			break;
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
