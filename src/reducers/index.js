import { combineReducers } from 'redux';
import airportsReducer from 'reducers/airports';
import searchReducer from 'reducers/search';
import ratesReducer from 'reducers/rates';

const rootReducer = combineReducers({
	airportsReducer,
    searchReducer,
    ratesReducer
});

export default rootReducer;