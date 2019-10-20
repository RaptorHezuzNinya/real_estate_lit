export const transformDate = (date, separator) => {
	const p = date.split(/\D/g);
	return [p[2], p[1], p[0]].join(separator);
};
