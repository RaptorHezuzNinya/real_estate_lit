import { combineReducers } from 'redux';
import { app } from './app.js';
import { uiReducer } from './ui.js';


const appReducer = combineReducers({
	app,
	ui: uiReducer,

});
// in order to reset store to initial state we return undefined
export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
