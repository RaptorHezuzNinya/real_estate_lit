export const arrayToObject = (array, keyField) =>
	array.reduce((obj, item) => {
		obj[item[keyField]] = item;
		return obj;
	}, {});

export const transformDate = (date, separator) => {
	const p = date.split(/\D/g);
	return [p[2], p[1], p[0]].join(separator);
};
