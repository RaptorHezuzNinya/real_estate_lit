import { combineReducers } from 'redux';
import { app } from './app.js';
import { ui } from './ui.js';
import { tenant } from './tenantReducer.js';
const appReducer = combineReducers({
	app,
	ui,
	tenant
});
// in order to reset store to initial state we return undefined
export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
