import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { setNotification } from '../../actions/notification.acs.js';
import { TENANTS, CREATE_TENANTS } from '../../actions/tenant.acs.js';

export const tenantsMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case CREATE_TENANTS: {
			debugger;
			next([
				apiRequest({ body: action.payload, method: 'POST', url: `/api/users`, entity: TENANTS }),
				setLoader({ state: true, entity: TENANTS })
			]);
			break;
		}

		case `${TENANTS} ${API_SUCCESS}`: {
			next([setUser({ user: action.payload }), setLoader({ state: false, entity: TENANTS })]);
			break;
		}

		case `${TENANTS} ${API_ERROR}`: {
			next([
				setNotification({ message: action.payload.message, entity: TENANTS }),
				setLoader({ state: false, entity: TENANTS })
			]);
			break;
		}
	}
};
