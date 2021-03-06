import 'isomorphic-fetch';
import isEmpty from 'lodash/isEmpty';

import apiBaseUrl from '../config';
import USER_LOGOUT from '../auth/auth';

const baseUrl = apiBaseUrl + 'reservations/';

export const RESERVATION_CREATED = 'RESERVATION_CREATED';
export const RESERVATION_FETCHED = 'RESERVATION_FETCHED';
export const RESERVATION_FETCH_STARTED = 'RESERVATION_FETCH_STARTED';
export const RESERVATION_PAID_FETCHED = 'RESERVATION_PAID_FETCHED';
export const RESERVATION_PAID_FETCH_STARTED = 'RESERVATION_PAID_FETCH_STARTED';

const initialState = {
    item: {},
    paidItem: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESERVATION_CREATED:
            return Object.assign({}, state, { item: action.item });

        case RESERVATION_FETCH_STARTED:
            return Object.assign({}, state, { item: {}, paidItem: {} });

        case RESERVATION_FETCHED:
            return Object.assign({}, state, { item: action.item });

        case RESERVATION_PAID_FETCH_STARTED:
            return Object.assign({}, state, { paidItem: {} });

        case RESERVATION_PAID_FETCHED:
            return Object.assign({}, state, { paidItem: action.item });

        default:
            return state;
    }
}

export const createReservation = data => dispatch => {
    if (localStorage.jwtToken) {

        return fetch(apiBaseUrl + 'profile', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1',
                'Access-Token': localStorage.jwtToken
            }
        })
            .then(handleErrors)
            .then(res => res.json())
            .then(() => {
                return fetch(baseUrl, {
                    method: 'post',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json; version=1',
                        'Access-Token': localStorage.jwtToken
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        dispatch({
                            type: RESERVATION_CREATED,
                            item: data['reservation']
                        });
                    });
            })
            .catch(() => {
                localStorage.removeItem('jwtToken');
                dispatch({ type: USER_LOGOUT });

                return fetch(baseUrl, {
                    method: 'post',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json; version=1'
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        dispatch({
                            type: RESERVATION_CREATED,
                            item: data['reservation']
                        });
                    });
            })


    } else {
        return fetch(baseUrl, {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
            .then(res => res.json())
            .then(data => {
                dispatch({
                    type: RESERVATION_CREATED,
                    item: data['reservation']
                });
            });
    }
};

export const fetchReservation = id => dispatch => {
    let headers;

    if (localStorage.jwtToken) {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        };
    } else {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        };
    }

    dispatch({ type: RESERVATION_FETCH_STARTED });

    return fetch(baseUrl + id, {
        method: 'get',
        headers: headers
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: RESERVATION_FETCHED,
                item: data['reservation']
            });
        });
};

export const fetchPaidReservation = (id) => (dispatch) => {
    let headers;

    if (localStorage.jwtToken) {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        };
    } else {
        headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        };
    }

    let interval;

    const promise = new Promise((resolve, reject) => {
        interval = setInterval(() => {
            fetch(baseUrl + id, {
                method: 'get',
                headers: headers
            })
                .then(res => res.json())
                .then((data) => {
                    if (data['reservation'].status === 'confirmed' || !isEmpty(data['reservation'].last_error_message)) {
                        clearInterval(interval);
                        resolve(data['reservation']);
                    }
                });
        }, 1000);
    });

    dispatch({ type: RESERVATION_PAID_FETCH_STARTED });

    promise.then(data => {
        dispatch({
            type: RESERVATION_PAID_FETCHED,
            item: data
        });
    });
};

// handle response error

export const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
};