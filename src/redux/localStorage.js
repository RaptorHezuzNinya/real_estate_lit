export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('http://localhost:8080:state');

		if (serializedState === null) {
			return undefined; // we return undefined so the reducers will init the state
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined; // we return undefined so the reducers will init the state
	}
};

export const saveState = state => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('http://localhost:8080:state', serializedState);
	} catch (err) {
		// TODO add logging for saveState errors
	}
};
