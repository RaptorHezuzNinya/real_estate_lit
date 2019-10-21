import { TRANSFORM } from '../../../actions/action.types.js';
import { transformComplete } from '../../../actions/dataMutation.acs.js';

export const transformMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type.includes(TRANSFORM) && action.meta.keyMapping) {
		next(action);

		const result = action.payload.map(obj => {
			obj['Af Bij'] === 'Bij' ? (obj['Af Bij'] = true) : (obj['Af Bij'] = false);
			return renameKeys(action.meta.keyMapping, obj);
		});
		const { entity } = action.meta;
		return dispatch(transformComplete({ entity, result }));
	}
	next(action);
};

const renameKeys = (keysMap, obj) =>
	Object.keys(obj).reduce(
		(acc, key) => ({
			...acc,
			...{ [keysMap[key] || key]: obj[key] }
		}),
		{}
	);
