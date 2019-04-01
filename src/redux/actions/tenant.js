import axios from 'axios';

// UNICORN NOTE => :why export thse const
export const GET_TENANTS = 'GET_TENANTS';
export const SET_TENANTS = 'SET_TENANTS';

export const setTenants = tenants => ({
	type: 'SET_TENANTS',
	payload: tenants
});

export const getTenants = () => dispatch =>
	axios.get('http://127.0.0.1:3000/tenants').then(({ data }) => {
		dispatch(setTenants(data));
	});
