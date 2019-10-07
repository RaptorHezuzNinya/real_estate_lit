import { USER, SIGN_UP_USER } from '../../actions/user.acs.js';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { setNotification } from '../../actions/notification.acs.js';

export const userMiddleware = () => next => action => {
	next(action);
	// debugger;
	// debugger;
	switch (action.type) {
		case SIGN_UP_USER:
			next([
				apiRequest({ body: action.payload, method: 'POST', url: '/api/users', entity: USER }),
				setLoader({ state: true, entity: USER })
			]);
			break;

		case `${USER} ${API_SUCCESS}`:
			next([
				// setBooks({ : action.payload.items, normalizeKey: 'id' }),
				// setLoader({ state: false, entity: BOOKS })
			]);
			break;

		// case `${USER} ${API_ERROR}`:
		// 	next([
		// 		setNotification({ message: action.payload.message, entity: BOOKS }),
		// 		setLoader({ state: false, entity: BOOKS })
		// 	]);
		// 	break;
	}
};
// next(action);
// if (action.type === FETCH_PAYMENTS) {
// 	dispatch(
// 		apiAction({
// 			url: `/payments/`,
// 			method: 'GET',
// 			onSuccess: FETCH_PAYMENTS_SUCCESS,
// 			onFailure: FETCH_PAYMENTS_ERROR,
// 			label: FETCH_PAYMENTS
// 		})
// 	);
// }
