import { USER_SIGN_UP } from '../actions/user.acs.js';
const initialState = {
	username: false,
	email: false,
	password: false
};

export const userReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		// case USER_SIGN_UP:
		// 	return { ...state, ...payload };

		default:
			return state;
	}
};
