// import 'isomorphic-fetch';

export const CREATE_SEARCH = 'CREATE_SEARCH';
export const LOAD_SEARCH = 'LOAD_SEARCH';

const initialState = {
    data: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
		case CREATE_SEARCH:
			return Object.assign([], state, { data: action.data });

        case LOAD_SEARCH:
            return Object.assign({}, ...state, { data: action.data });

        default:
            return state;
    }
}

export const createSearch = (data) => (dispatch) => {
    return fetch('http://staging.back.parkingaccess.com/airport_parking/searches/', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch({
                type: CREATE_SEARCH,
                data: data['airport_parking/search']
            });
        });
};

export const fetchSearch = (id) => (dispatch) => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            dispatch({
                type: LOAD_SEARCH,
                data: data['airport_parking/search']
            });
        });
};

// export const fetchRates = id => dispatch => {
// 	return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}/rates`, {
//         method: 'get',
//         headers: {
//             'Content-Type': 'application/json',
//             Accept: 'application/json; version=1'
//         }
//     })
//         .then(res => res.json())
//         .then(rates => {
//             dispatch({
//                 type: FETCH_RATES_SUCCESS,
//                 items: rates['airport_parking/rates']
//             });
//             console.log(rates['airport_parking/rates']);
//         });
// };

// export const createSearch = data => dispatch => {
// 	return fetch('http://staging.back.parkingaccess.com/airport_parking/searches/', {
//         method: 'post',
//         body: JSON.stringify(data),
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json; version=1'
//         }
// 	})
// 		.then(res => res.json())
// 		.then(data => data['airport_parking/search'].id)
//
//         .then(id => dispatch(fetchRates(id)));
//
//         // .then(id => fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}/rates`, {
//         //         method: 'get',
//         //         headers: {
//         //             'Content-Type': 'application/json',
//         //             'Accept': 'application/json; version=1'
//         //         }
//         //     })
//         //         .then(res => res.json())
//         //         .then(rates => {
//         //             dispatch({
//         //                 type: FETCH_RATES_SUCCESS,
//         //                 items: rates['airport_parking/rates']
//         //             });
//         //             console.log(rates['airport_parking/rates']);
//         //         })
//         // );
// };