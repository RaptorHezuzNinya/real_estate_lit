import { FILTER } from '../../../actions/action.types.js';
import { filterComplete } from '../../../actions/dataMutation.acs.js';

export const filterMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type.includes(FILTER) && action.meta.identifiers) {
		next(action);

		const identifiers = action.meta.identifiers;

		const result = action.payload.filter(object => {
			if (object && identifiers.includes(object[`${action.meta.identifier}`])) {
				return object;
			}
		});

		const { entity, subEntity } = action.meta;
		return dispatch(filterComplete({ entity, subEntity, result }));
	}

	next(action);
};
