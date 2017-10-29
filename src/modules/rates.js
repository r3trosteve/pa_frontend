import 'isomorphic-fetch';

export const RATES_LOADED_START = 'RATES_LOADED_START';
export const RATES_LOADED_SUCCESS = 'RATES_LOADED_SUCCESS';
export const RATES_SORTED_BY_DISTANCE = 'RATES_SORTED_BY_DISTANCE';
export const RATES_SORTED_BY_LOW_PRICE = 'RATES_SORTED_BY_LOW_PRICE';
export const RATES_SORTED_BY_HIGH_PRICE = 'RATES_SORTED_BY_HIGH_PRICE';

const initialState = {
    isFetching: true,
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RATES_LOADED_START:
            return Object.assign({}, state, { isFetching: true });

        case RATES_LOADED_SUCCESS:
            return Object.assign({}, state, { items: action.items, isFetching: false });

        case RATES_SORTED_BY_DISTANCE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => a.distance - b.distance)
            });

        case RATES_SORTED_BY_LOW_PRICE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => a.price.total - b.price.total)
            });

        case RATES_SORTED_BY_HIGH_PRICE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => b.price.total - a.price.total)
            });

        default:
            return state;
    }
}

export const fetchRates = (id) => (dispatch) => {

    let interval;

    const promise = new Promise((resolve, reject) => {
        interval = setInterval(() => {
            fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json; version=1'
                }
            })
                .then(res => res.json())
                .then((data) => {
                    if (data['airport_parking/search'].status === 'finished') {
                        clearInterval(interval);
                        resolve(data['airport_parking/search']);
                    }
                });
        }, 1000);
    });

    dispatch({ type: RATES_LOADED_START });

    promise.then(() => {

        fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}/rates`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
            .then(res => res.json())
            .then((rates) => {
                dispatch({
                    type: RATES_LOADED_SUCCESS,
                    items: rates['airport_parking/rates']
                });
            });
    });
};

export const sortRatesByDistance = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_DISTANCE,
        items: rates
    });
};

export const sortRatesByLowPrice = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_LOW_PRICE,
        items: rates
    });
};

export const sortRatesByHighPrice = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_HIGH_PRICE,
        items: rates
    });
};