import { SET } from './action.types.js';

// action types

export const LOADER = 'Loader';
export const SET_LOADER = `${SET} ${LOADER}`;

// action creators
export const setLoader = ({ state, entity }) => ({
	type: `${entity} ${SET_LOADER}`,
	payload: state,
	meta: { entity }
});
