import { combineReducers } from 'redux';
import airports from './airports/airports';
import airport from './airports/airport';
import search from './search/search';
import rates from './rates/rates';
import rate from './rates/rate';
import auth from './auth/auth';
import reservation from './reservations/reservation';

const rootReducer = combineReducers({
	airports,
	airport,
	search,
	rates,
	rate,
	auth,
    reservation
});

export default rootReducer;
