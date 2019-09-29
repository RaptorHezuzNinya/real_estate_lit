import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { rootReducer } from './reducers/index.js';
import { apiMiddleware } from '../redux/middleware/apiMW.js';
import { saveState, loadState } from './localStorage.js';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// persistedState loads state from localStore
const persistedState = loadState();
// if you wanna readd resisted state use persistedState instead of state
const setupStore = state =>
	createStore(
		rootReducer,
		persistedState,
		// state,
		devCompose(
			applyMiddleware(
				thunk,
				apiMiddleware
			)
		)
	);

export const store = setupStore();

store.subscribe(() => {
	saveState(store.getState());
});
