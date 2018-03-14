import 'isomorphic-fetch';

import apiBaseUrl from '../config';

const initialState = {
    data: {},
    error: ''
};

export const COUPON_REQUESTED = 'COUPON_REQUESTED';
export const COUPON_SUBMITTED = 'COUPON_SUBMITTED';
export const COUPON_NOT_FOUND = 'COUPON_NOT_FOUND';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COUPON_REQUESTED:
            return Object.assign({}, state, { data: action.data, error: '' });
        
        case COUPON_SUBMITTED:
            return Object.assign({}, state, { data: action.data, error: '' });

        case COUPON_NOT_FOUND:
            return Object.assign({}, state, { error: action.error });

        default:
            return state;
    }
}

export const requestCoupon = (reservationId, coupon) => dispatch => {
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

    return fetch(apiBaseUrl + `coupons/?code=${coupon}`, {
        method: 'get',
        headers: headers
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: COUPON_REQUESTED,
                data: data['coupons']
            });

            if (data['coupons'].length !== 0 && data['coupons'][0].status === 'active') {
                console.log('Coupon ID:', data['coupons'][0].id);

                return fetch(apiBaseUrl + `reservations/${reservationId}/coupons`, {
                    method: 'post',
                    body: JSON.stringify({ coupon_id: data['coupons'][0].id }),
                    headers: headers
                })
                    .then(handleErrors)
                    .then(res => res.json())
                    .then(data => {
                        dispatch({
                            type: COUPON_SUBMITTED,
                            data: data
                        });

                        console.log('Coupon submitted', data);
                    })
                    .catch(() => {
                        dispatch({
                            type: COUPON_NOT_FOUND,
                            error: 'This coupon has been already used'
                        });
                    });

            } else {
                dispatch({
                    type: COUPON_NOT_FOUND,
                    error: 'No such coupon found'
                });
            }
        });

};

// handle response error

export const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
};