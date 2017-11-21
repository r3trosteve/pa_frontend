import 'isomorphic-fetch';

export const LOTS_FETCHED = 'LOTS_FETCHED';

const initialState = {
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOTS_FETCHED:
            return Object.assign({}, state, { items: action.items });

        default:
            return state;
    }
}

export const fetchLots = () => dispatch => {
    return fetch('http://staging.back.parkingaccess.com/airport_parking/parking_lots', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: LOTS_FETCHED,
                items: data['airport_parking/parking_lots']
            });
        });
};
