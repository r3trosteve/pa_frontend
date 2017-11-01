import 'isomorphic-fetch';

export const AIRPORT_LOADED = 'AIRPORT_LOADED';

const initialState = {
    item: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case AIRPORT_LOADED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchAirport = (id) => (dispatch) => {
    return fetch(`http://staging.back.parkingaccess.com/airports/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(airport => {
            dispatch({
                type: AIRPORT_LOADED,
                item: airport.airport
            });
        });
};
