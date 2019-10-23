import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.acs.js';
import { setLoader } from '../../actions/ui.acs.js';
import { CSV, FILE } from '../../actions/file.acs.js';
import { TENANTS, createTenants } from '../../actions/tenant.acs.js';
import Papa from 'papaparse';
import { PARSE } from '../../actions/action.types.js';
import { PAYMENTS } from '../../actions/payment.acs.js';
import { filterData } from '../../actions/dataMutation.acs.js';

export const fileMiddleware = ({ dispatch, getState }) => next => action => {
	next(action);

	switch (action.type) {
		case `${FILE} ${TENANTS} ${CSV} ${PARSE}`: {
			const result = [];
			Papa.parse(action.payload, {
				header: true,
				step: function(row) {
					result.push(row.data);
				},
				complete: () => {
					dispatch(createTenants({ tenants: result, multiple: true }));
				}
			});
			break;
		}

		case `${FILE} ${PAYMENTS} ${CSV} ${PARSE}`: {
			const state = getState();
			const tenants = state.tenant.tenants;
			const tenantIdentifiers = [];
			for (const key in tenants) {
				if (tenants.hasOwnProperty(key)) {
					tenantIdentifiers.push(tenants[key].iban);
				}
			}

			const result = [];
			Papa.parse(action.payload, {
				header: true,
				step: function(row) {
					result.push(row.data);
				},
				complete: () => {
					dispatch(
						filterData({
							data: result,
							entity: PAYMENTS,
							identifiers: tenantIdentifiers,
							identifier: 'Tegenrekening'
						})
					);
				}
			});
			break;
		}

		case `${FILE} ${API_SUCCESS}`: {
			next([]);
			break;
		}

		case `${FILE} ${API_ERROR}`: {
			next([]);
			break;
		}
	}
};
