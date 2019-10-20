import { dataNormalized } from '../../../actions/dataMutation.acs.js';
import { SET } from '../../../actions/action.types.js';
import { setTenants } from '../../../actions/tenant.acs.js';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
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
