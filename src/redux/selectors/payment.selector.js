import { createSelector } from 'reselect';

const paymentsSelector = state => state.payment.payments;
const tenantsSelector = state => state.tenant.tenants;

export const paymentsByTenantId = createSelector(
	[paymentsSelector, tenantsSelector],

	(payments, tenants) => {
		const data = {};
		for (const key in tenants) {
			if (tenants.hasOwnProperty(key)) {
				const paymentsByTenantId = payments.filter(filterCallBack, tenants[key]);
				data[tenants[key].id] = paymentsByTenantId;
			}
		}
		return data;
	}
);

function filterCallBack(element) {
	return element.tenant_id === this.id;
}
