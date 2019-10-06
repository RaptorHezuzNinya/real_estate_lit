export const USER = '[User]';
export const SIGN_UP_USER = `${USER} Sign up`;

export const signUpUser = data => ({
	type: SIGN_UP_USER,
	payload: data,
	meta: { feature: USER }
});
