export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR = 'HIDE_ERROR';

export const SHOW_FEEDBACK = 'SHOW_FEEDBACK';
export const HIDE_FEEDBACK = 'HIDE_FEEDBACK';

export const showLoader = label => ({
	type: SHOW_LOADER,
	label
});

export const hideLoader = label => ({
	type: HIDE_LOADER,
	label
});

export const showErrorGeneric = (section, error) => dispatch => {
	dispatch({
		type: `${section}_SHOW_ERROR`,
		error: error
	});
	setTimeout(() => {
		return dispatch({ type: `${section}_HIDE_ERROR`, error: error });
	}, 3000);
};

export const showFeedbackGeneric = (section, data) => dispatch => {
	dispatch({
		type: `${section}_SHOW_FEEDBACK`,
		payload: data
	});
	setTimeout(() => {
		return dispatch({ type: `${section}_HIDE_FEEDBACK`, payload: data });
	}, 2000);
};

export const showError = (error, label) => dispatch => {
	dispatch({
		type: SHOW_ERROR,
		error: error,
		label
	});
	setTimeout(() => {
		return dispatch({ type: HIDE_ERROR, label });
	}, 3000);
};

export const showFeedback = (data, label) => dispatch => {
	dispatch({
		type: SHOW_FEEDBACK,
		payload: data,
		label
	});
	setTimeout(() => {
		return dispatch({ type: HIDE_FEEDBACK, label });
	}, 3000);
};
