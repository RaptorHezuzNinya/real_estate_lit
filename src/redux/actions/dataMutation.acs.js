import { NORMALIZED, TRANSFORM, COMPLETE, FILTER } from '../actions/action.types.js';

export const DATA = '[Data]';

// EVENT - action types
export const DATA_NORMALIZED = `${DATA} ${NORMALIZED}`;
export const dataNormalized = ({ entity }) => ({
	type: `${entity} ${DATA_NORMALIZED}`,
	meta: { entity }
});

export const filterData = ({ data, entity, identifiers, identifier }) => ({
	type: `${entity} ${FILTER}`,
	payload: data,
	meta: { entity, identifiers, identifier }
});

// [ means subEntity ] complete is the document type action here
export const FILTER_COMPLETE = `[${FILTER}] ${COMPLETE}`;
export const filterComplete = ({ result, entity, subEntity }) => ({
	type: `${entity} ${FILTER_COMPLETE}`,
	payload: result,
	meta: { entity, subEntity }
});

export const transformData = ({ data, entity, keyMapping }) => ({
	type: `${entity} ${TRANSFORM}`,
	payload: data,
	meta: { entity, keyMapping }
});

export const TRANSFORM_COMPLETE = `[${TRANSFORM}] ${COMPLETE}`;
export const transformComplete = ({ entity, result }) => ({
	type: `${entity} ${TRANSFORM_COMPLETE}`,
	payload: result,
	meta: { entity }
});
