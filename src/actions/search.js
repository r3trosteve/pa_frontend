// POST SEARCH

export const postSearchSuccess = data => {
    return {
        type: 'POST_SEARCH_SUCCESS',
        data
    };
};

export function postSearch(data) {
    return dispatch => {
        return fetch('http://staging.back.parkingaccess.com/airport_parking/searches/', {
            method: 'post',
			body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
		.then(response => response.json())
        .then(json => dispatch(postSearchSuccess(json['airport_parking/search'])))
		.catch(error => {
			throw(error);
		});
    };
}

// GET SEARCH

export const getSearchSuccess = data => {
    return {
        type: 'GET_SEARCH_SUCCESS',
        data
    };
};

export function getSearch(id) {
    return dispatch => {
        return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(getSearchSuccess(json['airport_parking/search'])))
            .catch(error => {
                throw(error);
            });
    };
}