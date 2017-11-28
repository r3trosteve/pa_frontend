import 'isomorphic-fetch';
import isEmpty from 'lodash/isEmpty';

import apiBaseUrl from '../config';

const baseUrl = apiBaseUrl + 'airport_parking/searches/';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json; version=1'
};

export const RATES_FETCH_START = 'RATES_FETCH_START';
export const RATES_FETCHED = 'RATES_FETCHED';
export const RATES_SORTED_BY_DISTANCE = 'RATES_SORTED_BY_DISTANCE';
export const RATES_SORTED_BY_LOW_PRICE = 'RATES_SORTED_BY_LOW_PRICE';
export const RATES_SORTED_BY_HIGH_PRICE = 'RATES_SORTED_BY_HIGH_PRICE';
export const RATES_SORTED_BY_RATING = 'RATES_SORTED_BY_RATING';
export const RATES_UNFILTERED = 'RATES_UNFILTERED';
export const RATES_FILTERED = 'RATES_FILTERED';

const initialState = {
    isFetching: true,
    items: [],
    filteredItems: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RATES_FETCH_START:
            return Object.assign({}, state, { isFetching: true });

        case RATES_FETCHED:
            return Object.assign({}, state, { items: action.items, filteredItems: action.items, isFetching: false });

        case RATES_UNFILTERED:
            return Object.assign({}, state, {
                filteredItems: action.items
            });

        case RATES_FILTERED:
            return Object.assign({}, state, {
                filteredItems: action.items.filter(item => item.name === action.kind)
            });

        case RATES_SORTED_BY_DISTANCE:
            return Object.assign({}, state, {
                filteredItems: action.items.slice().sort((a, b) => a.distance - b.distance)
            });

        case RATES_SORTED_BY_LOW_PRICE:
            return Object.assign({}, state, {
                filteredItems: action.items.slice().sort((a, b) => a.price.total - b.price.total)
            });

        case RATES_SORTED_BY_HIGH_PRICE:
            return Object.assign({}, state, {
                filteredItems: action.items.slice().sort((a, b) => b.price.total - a.price.total)
            });

        case RATES_SORTED_BY_RATING:
            return Object.assign({}, state, {
                filteredItems: action.items.slice().sort((a, b) => {
                    if (!isEmpty(a.parking_lot) && !isEmpty(b.parking_lot)) {
                        return a.parking_lot.rating - b.parking_lot.rating;
                    }
                })
            });

        default:
            return state;
    }
}

export const fetchRates = (id) => (dispatch) => {

    let interval;

    const promise = new Promise((resolve, reject) => {
        interval = setInterval(() => {
            fetch(baseUrl + id, {
                method: 'get',
                headers
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

    dispatch({ type: RATES_FETCH_START });

    promise.then(() => {

        fetch(`${baseUrl + id}/rates`, {
            method: 'get',
            headers
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: RATES_FETCHED,
                    items: data['airport_parking/rates']
                });
            });
    });
};

export const filterRates = (rates, kind) => dispatch => {
    if (kind !== '') {
        return dispatch({
            type: RATES_FILTERED,
            items: rates,
            kind
        });
    } else {
        return dispatch({
            type: RATES_UNFILTERED,
            items: rates
        });
    }
};

export const sortRatesByDistance = rates => dispatch => {
    return dispatch({
        type: RATES_SORTED_BY_DISTANCE,
        items: rates
    });
};

export const sortRatesByLowPrice = rates => dispatch => {
    return dispatch({
        type: RATES_SORTED_BY_LOW_PRICE,
        items: rates
    });
};

export const sortRatesByHighPrice = rates => dispatch => {
    return dispatch({
        type: RATES_SORTED_BY_HIGH_PRICE,
        items: rates
    });
};

export const sortRatesByRating = rates => dispatch => {
    return dispatch({
        type: RATES_SORTED_BY_RATING,
        items: rates
    });
};