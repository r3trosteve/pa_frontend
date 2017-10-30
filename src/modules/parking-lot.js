import 'isomorphic-fetch';

export const RATE_LOADED = 'RATE_LOADED';

const initialState = {
    item: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RATE_LOADED:
            return Object.assign({}, state, { item: action.item });

        default:
            return state;
    }
}

export const fetchRate = (id) => (dispatch) => {
    fetch(`http://staging.back.parkingaccess.com/airport_parking/rates/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json())
        .then((data) => {
            dispatch({
                type: RATE_LOADED,
                item: data['airport_parking/rate']
            });
        });
};