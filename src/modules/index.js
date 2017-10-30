import { combineReducers } from 'redux';
import airports from './airports';
import search from './search';
import rates from './rates';
import auth from './auth';
import rate from './parking-lot';

const rootReducer = combineReducers({
	airports,
	search,
	rates,
	auth,
	rate
});

export default rootReducer;
