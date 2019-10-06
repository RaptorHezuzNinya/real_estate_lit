import { createSelector } from 'reselect';

const getUserSelector = state => state.user.user;

export const getUserRolesSelector = createSelector(
	getUserSelector,
	user => {
		const userRoles = user.roleDescriptions.map(roleDescription => {
			let arr = [];
			user.assignedRoles.forEach(assignedRole => {
				if (roleDescription.id == assignedRole.roleId) {
					return arr.push({
						roleId: assignedRole.roleId,
						userId: assignedRole.userId,
						assignedRoleId: assignedRole.assignedRoleId,
						name: roleDescription.name,
						title: roleDescription.title,
						dashboardUrl: roleDescription.dashboardUrl
					});
				}
			});
			return arr[0];
		});
		// return arrayToObject(x, 'roleId');
		return userRoles;
	}
);
