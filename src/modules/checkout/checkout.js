import 'isomorphic-fetch';

import apiBaseUrl from '../config';

export const PNF_CHECKOUT_REQUESTED = 'PNF_CHECKOUT_REQUESTED';
export const PRS_CHECKOUT_REQUESTED = 'PRS_CHECKOUT_REQUESTED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PNF_CHECKOUT_REQUESTED:
            return Object.assign({}, state, { item: action.item });

        case PRS_CHECKOUT_REQUESTED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const requestPnfCheckout = id => dispatch => {
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
                type: PNF_CHECKOUT_REQUESTED,
                item: data
            });
        });
};

export const requestPrsCheckout = (id, data) => dispatch => {
    return fetch(apiBaseUrl + `reservations/${id}`, {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: PRS_CHECKOUT_REQUESTED,
                item: data
            });
        });
};