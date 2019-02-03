import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';
import { tenantReducer } from './reducers/tenant-reducer';

const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	state => state,
	devCompose(lazyReducerEnhancer(combineReducers), applyMiddleware(thunk))
);

// Initially loaded reducers.
store.addReducers({
	tenantReducer
});
