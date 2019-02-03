const INITIAL_STATE = {
	tenants: []
};

export const tenantReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_ALL_TENANTS':
			break;

		default:
			return state;
	}
};

const bla = () => {
	return console.log('uncirnon');
};
export default bla;
