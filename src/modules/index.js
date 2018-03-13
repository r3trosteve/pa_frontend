import { combineReducers } from 'redux';
import airports from './airports/airports';
import airport from './airports/airport';
import lots from './lots/lots';
import lot from './lots/lot';
import search from './search/search';
import rates from './rates/rates';
import rate from './rates/rate';
import auth from './auth/auth';
import reservation from './reservations/reservation';
import checkout from './checkout/checkout';
import coupons from './coupons/coupons';

const rootReducer = combineReducers({
	airports,
	airport,
    lots,
	lot,
	search,
	rates,
	rate,
	auth,
    reservation,
	checkout,
	coupons
});

export default rootReducer;
