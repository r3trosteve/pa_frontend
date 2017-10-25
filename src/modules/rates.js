import 'isomorphic-fetch';

export const RATES_LOADED = '@ssr/rates/loaded';
export const RATES_SORTED_BY_DISTANCE = '@ssr/rates/sorted-by-distance';
export const RATES_SORTED_BY_LOW_PRICE = '@ssr/rates/sorted-by-low-price';
export const RATES_SORTED_BY_HIGH_PRICE = '@ssr/rates/sorted-by-high-price';
// export const RATES_FILTERED_BY_TYPE = '@ssr/rates/filtered-by-type';

const initialState = {
    items: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RATES_LOADED:
            return Object.assign({}, state, { items: action.items });

        case RATES_SORTED_BY_DISTANCE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => a.distance - b.distance)
            });

        case RATES_SORTED_BY_LOW_PRICE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => a.price.total - b.price.total)
            });

        case RATES_SORTED_BY_HIGH_PRICE:
            return Object.assign({}, state, {
                items: action.items.slice().sort((a, b) => b.price.total - a.price.total)
            });

        // case RATES_FILTERED_BY_TYPE:
        // 	return Object.assign({}, state, {
        // 		items: action.items.filter((item => item.name === action.kind))
        // 	});

        default:
            return state;
    }
}

export const fetchRates = (id) => (dispatch) => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}/rates`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json; version=1'
        }
    })
        .then((res) => {
            return res.json();
        })
        .then((rates) => {
            dispatch({
                type: RATES_LOADED,
                items: rates['airport_parking/rates']
            });
            console.log(rates['airport_parking/rates']);
        });
};

export const sortRatesByDistance = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_DISTANCE,
        items: rates
    });
};

export const sortRatesByLowPrice = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_LOW_PRICE,
        items: rates
    });
};

export const sortRatesByHighPrice = (rates) => (dispatch) => {
    return dispatch({
        type: RATES_SORTED_BY_HIGH_PRICE,
        items: rates
    });
};

// export const filterRatesByTypes = (rates, type) => (dispatch) => {
//     return dispatch({
//         type: RATES_FILTERED_BY_TYPE,
//         items: rates,
// 		kind: type
//     });
// };