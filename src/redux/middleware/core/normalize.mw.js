import { dataNormalized } from '../../actions/data.acs.js';
import { SET } from '../../actions/types.acs.js';
import { setTenants } from '../../actions/tenant.acs.js';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
	// filter both by action type and metadata content
	if (action.type.includes(SET) && action.meta.normalizeKey) {
		// notify about the transformation
		debugger;
		dispatch(dataNormalized({ entity: action.meta.entity }));

		// transform the data structure
		const data = action.payload.reduce((acc, item) => {
			acc[item[action.meta.normalizeKey]] = item;
			return acc;
		}, {});

		//fire the user document action
		next(setTenants({ data, normalizeKey: null }));
	} else {
		next(action);
	}
};
