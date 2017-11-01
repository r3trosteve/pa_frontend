import { combineReducers } from 'redux';
import airports from './airports';
import airport from './airport';
import search from './search';
import rates from './rates';
import auth from './auth';
import parking_lot from './parking-lot';
import reservations from './reservations';

const rootReducer = combineReducers({
	airports,
	airport,
	search,
	rates,
	auth,
    parking_lot,
    reservations
});

export default rootReducer;
