import { SET, FETCH } from '../actions/types.js';
// entity
export const USER = '[User]';
// action types
export const FETCH_USER = `${USER} ${FETCH}`;
export const SET_USER = `${USER} ${SET}`;
export const SIGN_UP_USER = `${USER} Sign up`;
export const LOGIN_USER = `${USER} Login`;

export const fetchUser = () => ({
	type: FETCH_USER,
	meta: { entity: USER }
});

export const signUpUser = user => ({
	type: SIGN_UP_USER,
	payload: user,
	meta: { entity: USER }
});

export const setUser = ({ user }) => ({
	type: SET_USER,
	payload: user,
	meta: { entity: USER }
});

export const loginUser = user => ({
	type: LOGIN_USER,
	payload: user,
	meta: { entity: USER }
});
