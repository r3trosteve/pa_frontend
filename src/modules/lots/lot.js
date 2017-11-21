import 'isomorphic-fetch';

export const LOT_FETCHED = 'LOT_FETCHED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOT_FETCHED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchLot = id => dispatch => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/parking_lots/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: LOT_FETCHED,
                item: data['airport_parking/parking_lot']
            });
        });
};

export const findLot = slug => dispatch => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/parking_lots?q[slug_eq]=${slug}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(data => dispatch(fetchLot(data['airport_parking/parking_lots'][0].id)));
};