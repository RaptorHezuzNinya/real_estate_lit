import { USER, SIGN_UP_USER, setUser, LOGIN_USER, FETCH_USER } from '../../actions/user.acs.js';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { setNotification } from '../../actions/notification.acs.js';
import { navigate } from '../../actions/app.acs.js';

export const userMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);
	// on set teants we need to add all new new tenants ids to the tenantsRefs opbject in user
	switch (action.type) {
		case SIGN_UP_USER: {
			next([
				apiRequest({ body: action.payload, method: 'POST', url: `/api/users`, entity: USER }),
				setLoader({ state: true, entity: USER })
			]);
			break;
		}

		case LOGIN_USER: {
			next([
				apiRequest({ body: action.payload, method: 'POST', url: `/api/users/login`, entity: USER }),
				setLoader({ state: true, entity: USER })
			]);
			break;
		}

		case FETCH_USER: {
			next([
				apiRequest({ url: `/api/user`, entity: USER, auth: true }),
				setLoader({ state: true, entity: USER })
			]);
			break;
		}

		case `${USER} ${API_SUCCESS}`: {
			window.history.pushState({}, '', '/user/dashboard');

			next([setUser({ user: action.payload }), setLoader({ state: false, entity: USER })]);
			dispatch(navigate({ page: '/user/dashboard' }));
			break;
		}

		case `${USER} ${API_ERROR}`: {
			next([
				setNotification({ message: action.payload.message, entity: USER }),
				setLoader({ state: false, entity: USER })
			]);
			break;
		}
	}
};
