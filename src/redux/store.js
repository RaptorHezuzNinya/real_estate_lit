import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// save redux state to localStorage
import { saveState, loadState } from './localStorage.js';
// middleware
import { actionSplitterMiddleware } from './middleware/core/actionSplitter.mw.js';
import { normalizeMiddleware } from './middleware/core/transform/normalize.mw.js';
// import { transformMiddleware } from './middleware/core/transform/transform.mw.js';
import { notificationMiddleware } from './middleware/core/notification.mw.js';
import { filterMiddleware } from './middleware/core/transform/filter.mw.js';
// entity middleware
import { apiMiddleware } from './middleware/core/api.mw.js';
import { userMiddleware } from './middleware/entity/user.mw.js';
import { appMiddleware } from './middleware/entity/app.mw.js';
import { tenantMiddleware } from './middleware/entity/tenant.mw.js';
import { paymentMiddleware } from './middleware/entity/payment.mw.js';
import { fileMiddleware } from './middleware/entity/file.mw.js';

// reducers
import { combineReducers } from 'redux';
import { appReducer } from './reducers/app.reducer.js';
import { userReducer } from './reducers/user.reducer.js';
import { tenantReducer } from './reducers/tenant.reducer.js';
import { pageTabReducer } from './reducers/pageTab.reducer.js';

const coreReducer = combineReducers({
	app: appReducer,
	user: userReducer,
	tenant: tenantReducer,
	pageTabs: pageTabReducer
});

const rootReducer = (state, action) => {
	return coreReducer(state, action);
};

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const entityMiddleware = [
	appMiddleware,
	userMiddleware,
	tenantMiddleware,
	paymentMiddleware,
	fileMiddleware
];

const coreMiddleware = [
	actionSplitterMiddleware,
	apiMiddleware,
	filterMiddleware,
	normalizeMiddleware,
	// transformMiddleware,
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
