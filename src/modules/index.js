import { combineReducers } from 'redux';
import airports from './airports';
import search from './search';
import rates from './rates';

const rootReducer = combineReducers({
	airports,
	search,
	rates
});

export default rootReducer;
