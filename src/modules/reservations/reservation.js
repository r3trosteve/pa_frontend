import 'isomorphic-fetch';

const baseUrl = 'http://staging.back.parkingaccess.com/reservations/';

export const RESERVATION_CREATED = 'RESERVATION_CREATED';
export const RESERVATION_FETCHED = 'RESERVATION_FETCHED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESERVATION_CREATED:
            return Object.assign({}, state, { item: action.item });

        case RESERVATION_FETCHED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const createReservation = data => dispatch => {
    return fetch(baseUrl, {
        method: 'post',
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
                type: RESERVATION_CREATED,
                item: data['reservation']
            });
        });
};

export const fetchReservation = id => dispatch => {
    return fetch(baseUrl + id, {
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
                type: RESERVATION_FETCHED,
                item: data['reservation']
            });
        });
};