import { PARSE } from './action.types.js';

// entity
export const FILE = '[File]';

// file types
export const CSV = '[csv]';

export const parseFile = ({ file, fileType, subEntity }) => ({
	type: `${FILE} ${subEntity} ${fileType} ${PARSE}`,
	payload: file,
	meta: { entity: FILE, subEntity }
});
