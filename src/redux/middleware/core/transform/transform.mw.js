import { TRANSFORM } from '../../../actions/action.types.js';

export const transformMiddleware = ({ dispatch, getState }) => next => action => {
	if (action.type.includes(TRANSFORM) && action.meta.transformMappings) {
		next(action);

		const result = action.payload.map(obj => {
			// loop over objects in array
			const transformMappings = action.meta.transformMappings;
			let newObj = {};
			for (const key in obj) {
				if (obj.hasOwnProperty(key)) {
					const objectKey = obj[key];
					newObj[`${transformMappings}`];
					// mission:
					// make new object with the keys of new object coming from the values from transformMappingObject
					// with the values of the new  object based on the values of the object we currently have in our loop
					// while we use the keys of the transfromMappings object to select the correct values from the object we have in our map
					// we need to loop the transfrom mappings object in every map iteration to build the new objects!
				}
			}

			return newObj;
		});
		debugger;
	}
	next(action);
};
