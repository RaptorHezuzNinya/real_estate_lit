import { INITIAL_STATE } from '../initialState';

export const userReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case GET_TENANTS:
			break;

		default:
			return state;
	}
};
