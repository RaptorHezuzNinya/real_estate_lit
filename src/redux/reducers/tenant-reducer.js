const INITIAL_STATE = {
	tenants: ['sjors']
};

export const tenantReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_TENANTS':
			break;

		case 'SET_TENANTS':
			return Object.assign({}, ...action.payload);
		default:
			return state;
	}
};
