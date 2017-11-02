import 'isomorphic-fetch';

export const AIRPORT_FETCHED = 'AIRPORT_FETCHED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AIRPORT_FETCHED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchAirport = id => dispatch => {
    return fetch(`http://staging.back.parkingaccess.com/airports/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: AIRPORT_FETCHED,
                item: data.airport
            });
        });
};
