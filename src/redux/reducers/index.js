import { combineReducers } from 'redux';
import { app } from './app.js';
import { ui } from './ui.js';
import { tenant } from './tenant.js';
import { payment } from './payment.js';

const appReducer = combineReducers({
	app,
	ui,
	tenant,
	payment
});
// in order to reset store to initial state we return undefined
export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
