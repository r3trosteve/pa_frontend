import 'isomorphic-fetch';

import apiBaseUrl from '../config';

export const CHECKOUT_REQUESTED = 'CHECKOUT_REQUESTED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHECKOUT_REQUESTED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const requestCheckout = id => dispatch => {
    return fetch(apiBaseUrl + `reservations/${id}/charge`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: CHECKOUT_REQUESTED,
                item: data
            });
        });
};