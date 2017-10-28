import 'isomorphic-fetch';

export const AIRPORTS_LOADED = 'AIRPORTS_LOADED';

const initialState = {
	items: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case AIRPORTS_LOADED:
			return Object.assign({}, state, { items: action.items });

		default:
			return state;
	}
}

export const fetchAirports = () => (dispatch) => {
	return fetch('http://staging.back.parkingaccess.com/airports', {
		method: 'get',
		headers: {
			Accept: 'application/json; version=1'
		}
	})
		.then((res) => {
			return res.json();
		})
		.then((airports) => {
			dispatch({
				type: AIRPORTS_LOADED,
				items: airports.airports
			});
		});
};
