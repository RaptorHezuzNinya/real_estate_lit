const DATA_NORMALIZED = 'DATA_NORMALIZED';

export const dataNormalized = ({ entity }) => ({
	type: `${entity} ${DATA_NORMALIZED}`,
	meta: { entity }
});
