import { combineReducers } from 'redux';
import airports from './airports';
import search from './search';
import rates from './rates';
import auth from './auth';

const rootReducer = combineReducers({
	airports,
	search,
	rates,
	auth
});

export default rootReducer;
