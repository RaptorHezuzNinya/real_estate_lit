import { FETCH } from './action.types.js';
import { ACCESS_TOKEN } from './subEntities.js';

export const ING_API = '[ING API]';

export const fetchIng = ({ subEntity }) => ({
	type: `${ING_API} ${subEntity} ${FETCH}`,
	meta: { entity: PAYMENTS, subEntity }
});
