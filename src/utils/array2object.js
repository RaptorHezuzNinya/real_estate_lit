export const array2object = (array, keyField) =>
	array.reduce((obj, item) => {
		obj[item[keyField]] = item;
		return obj;
	}, {});
