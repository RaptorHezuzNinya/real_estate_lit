import { NORMALIZED, TRANSFORM, COMPLETE, FILTER } from '../actions/action.types.js';

export const DATA = '[Data]';

// EVENT - action types
export const DATA_NORMALIZED = `${DATA} ${NORMALIZED}`;
export const dataNormalized = ({ entity }) => ({
	type: `${entity} ${DATA_NORMALIZED}`,
	meta: { entity }
});

export const transformData = ({ data, entity }) => ({
	type: `${entity} ${TRANSFORM}`,
	payload: data,
	meta: { entity, transformMappings }
});

export const TRANSFORM_COMPLETE = `[${TRANSFORM}] ${COMPLETE}`;
export const transformComplete = ({ entity }) => ({
	type: `${entity} ${TRANSFORM_COMPLETE}`,
	meta: { entity }
});

export const filterData = ({ data, entity, identifiers }) => ({
	type: `${entity} ${FILTER}`,
	payload: data,
	meta: { entity, identifiers }
});

// export const FILTER_COMPLETE = `[${FILTER}] ${COMPLETE}`;
// export const filterComplete = ({ data, entity }) => ({
// 	type: `${entity} ${FILTER_COMPLETE}`,
// 	payload: data,
// 	meta: { entity, filterMappings }
// });
