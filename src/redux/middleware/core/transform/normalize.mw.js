import { dataNormalized } from '../../../actions/dataMutation.acs.js';
import { SET } from '../../../actions/action.types.js';

export const normalizeMiddleware = ({ dispatch }) => next => action => {
	if (action.type.includes(SET) && action.meta.normalizeKey) {
		// notify about the transformation
		dispatch(dataNormalized({ entity: action.meta.entity }));

		// transform the data structure
		const data = action.payload.reduce((acc, item) => {
			acc[item[action.meta.normalizeKey]] = item;
			return acc;
		}, {});

		action.meta.normalizeKey = null;
		next({ type: action.type, payload: data, meta: action.meta });
	} else {
		next(action);
	}
};
