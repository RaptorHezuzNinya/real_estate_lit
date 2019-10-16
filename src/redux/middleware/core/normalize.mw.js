import { dataNormalized } from '../../actions/data.acs.js';
import { SET } from '../../actions/action.types.js';
import { setTenants } from '../../actions/tenant.acs.js';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
	// filter both by action type and metadata content
	if (action.type.includes(SET) && action.meta.normalizeKey) {
		// notify about the transformation

		dispatch(dataNormalized({ entity: action.meta.entity }));

		// transform the data structure
		const data = action.payload.reduce((acc, item) => {
			acc[item[action.meta.normalizeKey]] = item;
			return acc;
		}, {});

		//fire the user document action
		// have check if datanormalized with entity tenants fired so we can set???
		next(setTenants({ tenants: data, normalizeKey: null }));
	} else {
		next(action);
	}
};
