import { SET_USER } from '../actions/user.acs.js';
const initialState = {
	user: false
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			// debugger;
			return { ...state, ...action.payload };

		default:
			return state;
	}
};
