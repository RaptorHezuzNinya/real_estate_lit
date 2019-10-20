import { FILTER } from '../../../actions/action.types.js';

export const filterMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type.includes(FILTER) && action.meta.filterMappings) {
		debugger;
	}
};
