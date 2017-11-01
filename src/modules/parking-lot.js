import 'isomorphic-fetch';

export const PARKING_LOT_LOADED = 'PARKING_LOT_LOADED';

const initialState = {
    item: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case PARKING_LOT_LOADED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchParkingLot = (id) => (dispatch) => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/rates/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: PARKING_LOT_LOADED,
                item: data['airport_parking/rate']
            });
        });
};