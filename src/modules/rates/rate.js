import 'isomorphic-fetch';

export const RATE_FETCHED = 'RATE_FETCHED';

const initialState = {
    item: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RATE_FETCHED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchRate = (id) => (dispatch) => {
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
                type: RATE_FETCHED,
                item: data['airport_parking/rate']
            });
        });
};