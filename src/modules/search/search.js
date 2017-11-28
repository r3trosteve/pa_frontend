import 'isomorphic-fetch';

import apiBaseUrl from '../config';

const baseUrl = apiBaseUrl + 'airport_parking/searches/';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json; version=1'
};

export const SEARCH_CREATED = 'SEARCH_CREATED';
export const SEARCH_FETCHED = 'SEARCH_FETCHED';

const initialState = {
    data: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
		case SEARCH_CREATED:
			return Object.assign([], state, { data: action.data });

        case SEARCH_FETCHED:
            return Object.assign({}, ...state, { data: action.data });

        default:
            return state;
    }
}

export const createSearch = (data) => (dispatch) => {
    return fetch(baseUrl, {
        method: 'post',
        body: JSON.stringify(data),
        headers
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: SEARCH_CREATED,
                data: data['airport_parking/search']
            });
        });
};

export const fetchSearch = (id) => (dispatch) => {
    return fetch(baseUrl + id, {
        method: 'get',
        headers
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: SEARCH_FETCHED,
                data: data['airport_parking/search']
            });
        });
};