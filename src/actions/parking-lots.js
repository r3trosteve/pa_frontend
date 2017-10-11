import parkingLotsJSON from 'data/parking-lots.json';

// GET AIRPORTS

export const getParkingLotsSuccess = parkingLots => {
	return {
		type: 'GET_PARKING_LOTS_SUCCESS',
		parkingLots
	};
};

export const getParkingLots = () => {
	return dispatch => {
		return fetch(parkingLotsJSON)
            .then(response => response.json())
			.then(json => dispatch(getParkingLotsSuccess(json)))
			.catch((error) => {
				throw(error);
			});
	};
};

// POST SEARCH

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
		.catch(error => {
			throw(error);
		});
    };
}

// GET SEARCH

export function getSearch(id) {
    return dispatch => {
        return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
            .then(response => {
                response.json();
			})
            .catch(error => {
                throw(error);
            });
    };
}