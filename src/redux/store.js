import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import logger from 'redux-logger';
import { rootReducer } from './reducers/index';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = state =>
	createStore(lazyReducerEnhancer(rootReducer), state, devCompose(applyMiddleware(thunk, logger)));

export const store = configureStore();

// old store
// export const store = createStore(
// 	rootReducer,
// 	state => state,
// 	devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk), applyMiddleware(logger))
// );

// store.addReducers({
// 	tenants: tenantReducer
// });
