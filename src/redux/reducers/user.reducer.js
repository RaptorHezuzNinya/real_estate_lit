import { SET_USER } from '../actions/user.acs.js';
const initialState = {
	email: false,
	username: false,
	token: false
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SET_USER:
			return { ...state, ...payload };

		default:
			return state;
	}
};
