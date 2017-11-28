import 'isomorphic-fetch';

import apiBaseUrl from '../config';

export const LOTS_FETCHED = 'LOTS_FETCHED';

const initialState = {
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOTS_FETCHED:
            return Object.assign({}, state, {
                items: action.items.sort((a, b) => {
                    if (a.name < b.name) return -1;
                    if (a.name > b.name) return 1;
                    return 0;
                })
            });

        default:
            return state;
    }
}

export const fetchLots = () => dispatch => {
    return fetch(apiBaseUrl + 'airport_parking/parking_lots?per_page=200', {
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
