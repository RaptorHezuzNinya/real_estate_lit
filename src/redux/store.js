import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// save redux state to localStorage
import { saveState, loadState } from './localStorage.js';
// middleware
import { actionSplitterMiddleware } from './middleware/core/actionSplitter.mw.js';
import { normalizeMiddleware } from './middleware/core/normalize.mw';
import { notificationMiddleware } from './middleware/core/notification.mw';
// entity middleware
import { apiMiddleware } from './middleware/core/api.mw.js';
import { userMiddleware } from './middleware/entity/user.mw.js';
import { appMiddleware } from './middleware/entity/app.mw.js';

// reducers
import { combineReducers } from 'redux';
import { appReducer } from './reducers/app.reducer.js';
import { userReducer } from './reducers/user.reducer.js';

const coreReducer = combineReducers({
	app: appReducer,
	user: userReducer
});

const rootReducer = (state, action) => {
	return coreReducer(state, action);
};

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const entityMiddleware = [appMiddleware, userMiddleware];

const coreMiddleware = [
	actionSplitterMiddleware,
	apiMiddleware,
	// normalizeMiddleware,
	notificationMiddleware
];

const persistedState = loadState();
const setupStore = state =>
	createStore(
		rootReducer,
		persistedState,

		devCompose(applyMiddleware(thunk, ...entityMiddleware, ...coreMiddleware))
	);

export const store = setupStore();

store.subscribe(() => {
	saveState(store.getState());
});
