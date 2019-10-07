import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// save redux state to localStorage
import { saveState, loadState } from './localStorage.js';
// middleware
import { apiMiddleware } from './middleware/core/api.mw.js';
import { actionSplitterMiddleware } from './middleware/core/actionSplitter.mw.js';
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

const featureMiddleware = [userMiddleware];

const coreMiddleware = [
	actionSplitterMiddleware,
	apiMiddleware
	// normalizeMiddleware,
	// notificationMiddleware,
	// loggerMiddleware
];

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
				// apiMiddleware,
				// ...tenantMiddleware,
				// ...paymentMiddleware,
				...featureMiddleware,
				...coreMiddleware
			)
		)
	);

export const store = setupStore();

store.subscribe(() => {
	saveState(store.getState());
});
