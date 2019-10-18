import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { setNotification } from '../../actions/notification.acs.js';
import { TENANTS, CREATE_TENANTS, setTenants, FETCH_TENANTS } from '../../actions/tenant.acs.js';

export const tenantMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case CREATE_TENANTS: {
			next([
				apiRequest({
					body: action.payload,
					method: 'POST',
					url: `/api/tenants`,
					entity: TENANTS,
					auth: true
				}),
				setLoader({ state: true, entity: TENANTS })
			]);
			break;
		}

		case FETCH_TENANTS: {
			next([
				apiRequest({
					url: `/api/tenants/${action.payload.currentUserId}`,
					entity: TENANTS,
					auth: true
				}),
				setLoader({ state: true, entity: TENANTS })
			]);
			break;
		}

		case `${TENANTS} ${API_SUCCESS}`: {
			action.payload.hasOwnProperty('tenants')
				? next([
						setTenants({ tenants: action.payload.tenants, normalizeKey: '_id' }),
						setLoader({ state: false, entity: TENANTS })
				  ])
				: next([
						setTenants({
							tenants: { [action.payload[`tenant`]._id]: action.payload[`tenant`] }
						}),
						setLoader({ state: false, entity: TENANTS })
				  ]);

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
