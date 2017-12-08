import 'isomorphic-fetch';

import apiBaseUrl from '../config';

export const PNF_CHECKOUT_REQUESTED = 'PNF_CHECKOUT_REQUESTED';
export const PRS_CHECKOUT_REQUESTED = 'PRS_CHECKOUT_REQUESTED';
export const PRS_CHECKOUT_FAILED = 'PRS_CHECKOUT_FAILED';

const initialState = {
    item: {},
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PNF_CHECKOUT_REQUESTED:
            return Object.assign({}, state, { item: action.item });

        case PRS_CHECKOUT_REQUESTED:
            return Object.assign({}, state, { item: action.item });

        case PRS_CHECKOUT_FAILED:
            return Object.assign({}, state, { error: action.error });

        default:
            return state;
    }
}

export const requestPnfCheckout = id => dispatch => {
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

    return fetch(apiBaseUrl + `reservations/${id}/charge`, {
        method: 'get',
        headers: headers
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: PNF_CHECKOUT_REQUESTED,
                item: data
            });
        });
};

export const requestPrsCheckout = (id, data) => dispatch => {
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

    return fetch(apiBaseUrl + `reservations/${id}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: headers
    })
        .then(handleErrors)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: PRS_CHECKOUT_REQUESTED,
                item: data
            });
        })
        .catch(() => {
            dispatch({
                type: PRS_CHECKOUT_FAILED,
                error: 'Payment failed.'
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