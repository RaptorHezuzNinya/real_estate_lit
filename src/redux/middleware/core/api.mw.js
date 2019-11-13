import axios from 'axios';
import { API_ROOT, ING_API_ROOT } from '../../../../config/config.js';
import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.acs.js';

export const apiMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	if (action.type.includes(API_REQUEST)) {
		const { url, method, entity, headers, auth, ing } = action.meta;

		const data = action.payload;
		const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
		const store = getState();

		if (auth && store.user.user) {
			headers.Authorization = `Bearer ${store.user.user.token}`;
		}

		axios.defaults.baseURL = API_ROOT;
		axios.defaults.headers.common['Content-Type'] = 'application/json';

		if (ing) {
			axios.defaults.baseURL = ING_API_ROOT;
			axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
			headers['Digest'] = 'SHA-256=47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU='; // if body of req is emtry this is default
			// headers['date'] = 'Thu, 31 Oct 2019 01:00:06 GMT';
			// Authorization: Signature keyId="",algorithm="rsa-sha256", headers="(request-target) date digest", signature="[SIGNATURE_VALUE]"
			headers.Authorization =
				"Signature keyId='d75073b4-f720-452f-a2c4-2a3621524af1', algorithm='rsa-sha256', headers='(request-target) date digest', signature='b+JoQfiBh7EqH26rCBoSJJMGfLuYd17f0NeVO7NHJqroOTB+KJ3QRHrPTKs9z7F0HZdJrz3KnX4kcHEsfRAx3VfsjtJ73gLR9o9OUWHASgnejFo5nIflkdDB6KFG7gK42X06mT+hmRh8zOGLD4YVoXC23Nj62b9DO6PBa8O8lmAqJuPL+pDyCmEIuAXzYL9iGzjTEYlwVj620EqFfrx183MejqNKyV3T2gadFK0uVVUbfGSKCItvBdD7AEaU91rCSo1PCQtgd1Vl1yEpFxCmpgR0Qpoko8VvsIyLD5vjh7Gy3WqskietfJ8OKfJ32Yj/jnxksyNV5WTaZqLiBjia0A=='";
			// headers.Authorization =
			// 	'Signature F93VT/r4dEHaCmj4S6MznUkwjPVDzOt3ReZP+o8X31YIWhqt1m1WHgHDVph6MQg6+CFS9+eWgLfBMFQxPpSYVDM3Kky04bxUkKihJP2AW58Bm4ebM6U5iv24ByCjEfPjyvRwRG9NJmyT2KVXfHugeNHPgtUCW2EE9PgFLlllwP3zqtpkwwqrhuTeaAx+SYYYJgiLP9V4FXbO/3382Ri5yqfWKRYOF+NoxORt+/g9CRcFiAalmbtcC1F72+/50ZlriTMPOtA/vFBgt6LCX+br1yeqvwhLne4SlbD68xCPjqlVHCQCLiMjYO01EmPfSreWBeRp3QPWgV8huAnYFvxpsA=';
		}
		axios
			.request({
				url,
				method,
				headers,
				[dataOrParams]: data
			})
			.then(({ data }) => {
				const response = data;
				// debugger;
				dispatch(apiSuccess({ response, entity }));
			})
			.catch(error => {
				console.log('error', error);
				// debugger;?
				dispatch(apiError({ error: error, entity }));
			});
	}
};
