import { CREATE } from '../actions/action.types.js';
export const HOUSE = '[House]';

export const createHouse = ({ house }) => ({
	type: `${HOUSE} ${CREATE}`,
	payload: house,
	meta: { entity: HOUSE }
});
