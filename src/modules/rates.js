import 'isomorphic-fetch';

export const RATES_LOADED = '@ssr/rates/loaded';

const initialState = {
	items: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case RATES_LOADED:
			return Object.assign({}, state, { items: action.items });

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
		});
};
