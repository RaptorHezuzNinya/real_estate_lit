import { dataNormalized } from '../../actions/data.acs.js';
import { setUser } from '../../actions/user.acs.js';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
	// filter both by action type and metadata content
	if (action.type.includes('SET') && action.meta.normalizeKey) {
		// notify about the transformation

		dispatch(dataNormalized({ entity: action.meta.entity }));

		// transform the data structure

		const user = action.payload.reduce((acc, item) => {
			acc[item[action.meta.normalizeKey]] = item;
			return acc;
		}, {});

		//fire the user document action
		next(setUser({ user, normalizeKey: null }));
	} else {
		next(action);
	}
};
