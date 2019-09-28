import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import logger from 'redux-logger';
import { rootReducer } from './reducers/index';
import { apiMiddleware } from './middleware/apiMW.js';
import { tenantMiddleware } from './middleware/tenantMW';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = state =>
	createStore(
		rootReducer,
		state,
		devCompose(applyMiddleware(thunk, ...tenantMiddleware, apiMiddleware, logger))
	);

export const store = configureStore();
