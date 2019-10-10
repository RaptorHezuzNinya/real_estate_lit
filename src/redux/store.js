import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// save redux state to localStorage
import { saveState, loadState } from './localStorage.js';
// middleware
import { apiMiddleware } from './middleware/core/api.mw.js';
import { actionSplitterMiddleware } from './middleware/core/actionSplitter.mw.js';
import { normalizeMiddleware } from './middleware/core/normalize.mw';
import { notificationMiddleware } from './middleware/core/notification.mw';
// entity middleware
import { userMiddleware } from './middleware/entity/user.mw.js';
import { tenantMiddleware } from '../redux/middleware/tenantMW.js';
import { paymentMiddleware } from './middleware/paymentMW.js';
// reducers
import { combineReducers } from 'redux';
import { app } from './reducers/app.js';
import { ui } from './reducers/ui.js';
import { tenant } from './reducers/tenant.js';
import { payment } from './reducers/payment.js';
import { userReducer } from './reducers/user.reducer.js';

const appReducer = combineReducers({
	app,
	ui,
	tenant,
	payment,
	user: userReducer
});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const entityMiddleware = [userMiddleware];

const coreMiddleware = [
	actionSplitterMiddleware,
	apiMiddleware,
	normalizeMiddleware,
	notificationMiddleware
	// loggerMiddleware
];

const persistedState = loadState(); // persistedState loads state from localStore

const setupStore = state =>
	createStore(
		rootReducer,
		persistedState,
		// state,
		devCompose(
			applyMiddleware(
				thunk,
				// ...tenantMiddleware,
				// ...paymentMiddleware,
				...entityMiddleware,
				...coreMiddleware
			)
		)
	);

export const store = setupStore();

store.subscribe(() => {
	saveState(store.getState());
});
