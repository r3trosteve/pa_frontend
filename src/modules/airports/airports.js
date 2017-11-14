import 'isomorphic-fetch';

export const AIRPORTS_FETCHED = 'AIRPORTS_FETCHED';

const initialState = {
	items: []
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case AIRPORTS_FETCHED:
			return Object.assign({}, state, { items: action.items });

		default:
			return state;
	}
}

export const fetchAirports = () => dispatch => {
	return fetch('http://staging.back.parkingaccess.com/airports?per_page=200', {
		method: 'get',
		headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
		}
	})
        .then(res => res.json())
		.then(data => {
			dispatch({
				type: AIRPORTS_FETCHED,
				items: data.airports
			});
		});
};
