export const USER = '[User]';
export const SIGN_UP_USER = `${USER} Sign up`;
export const SET_USER = `${USER} SET`;

export const signUpUser = user => ({
	type: SIGN_UP_USER,
	payload: user,
	meta: { entity: USER }
});

export const setUser = ({ user }) => ({
	type: SET_USER,
	payload: user,
	meta: { normalizeKey, entity: USER }
});
