import { combineReducers } from 'redux';
import { app } from './app.js';
import { ui } from './ui.js';
import { tenant } from './tenant.js';
import { payment } from './payment.js';
import { userReducer } from './user.reducer.js';

const appReducer = combineReducers({
	app,
	ui,
	tenant,
	payment,
	user: userReducer
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};
