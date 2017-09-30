import { combineReducers } from 'redux';
import airportsReducer from 'reducers/airports';
import parkingLotsReducer from 'reducers/parking-lots';

const rootReducer = combineReducers({
	airportsReducer,
	parkingLotsReducer
});

export default rootReducer;