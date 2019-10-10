import { USER, SIGN_UP_USER, setUser } from '../../actions/user.acs.js';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { setNotification } from '../../actions/notification.acs.js';

export const userMiddleware = () => next => action => {
	next(action);

	switch (action.type) {
		case SIGN_UP_USER:
			next([
				apiRequest({ body: action.payload, method: 'POST', url: '/api/users', entity: USER }),
				setLoader({ state: true, entity: USER })
			]);
			break;

		case `${USER} ${API_SUCCESS}`:
			next([setUser({ user: action.payload }), setLoader({ state: false, entity: USER })]);
			break;

		case `${USER} ${API_ERROR}`:
			next([
				setNotification({ message: action.payload.message, entity: USER }),
				setLoader({ state: false, entity: USER })
			]);
			break;
	}
};