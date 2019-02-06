import axios from 'axios';

export const GET_TENANTS = 'GET_TENANTS';
export const SET_TENANTS = 'SET_TENANTS';

export const getTenants = () => {
	return () => {
		return axios.get('http://127.0.0.1:5000/tenants').then(({ data }) => {
			dispatch(setTenants(data));
		});
	};
};

export const setTenants = tenants => {
	return {
		type: 'SET_TENANTS',
		payload: tenants
	};
};
