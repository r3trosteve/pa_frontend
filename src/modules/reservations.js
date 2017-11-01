import 'isomorphic-fetch';

export const CREATE_RESERVATION = 'CREATE_RESERVATION';
export const LOAD_RESERVATION = 'LOAD_RESERVATION';

const initialState = {
    data: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_RESERVATION:
            return Object.assign({}, state, { data: action.data });

        case LOAD_RESERVATION:
            return Object.assign({}, state, { data: action.data });

        default:
            return state;
    }
}

export const createReservation = (data) => (dispatch) => {
    return fetch('http://staging.back.parkingaccess.com/reservations', {
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
                type: CREATE_RESERVATION,
                data: data['reservation']
            });
            console.log(data['reservation'])
        });
};

export const loadReservation = (id) => (dispatch) => {
    return fetch(`http://staging.back.parkingaccess.com/reservations/${id}`, {
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
                type: LOAD_RESERVATION,
                data: data
            });
        });
};