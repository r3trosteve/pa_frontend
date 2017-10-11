import parkingLotsJSON from 'data/parking-lots.json';

export const getParkingLotsSuccess = (parkingLots, airportName) => {
	return {
		type: 'GET_PARKING_LOTS_SUCCESS',
		parkingLots, airportName
	};
};

export const getParkingLots = (airportName) => {
	return (dispatch) => {
		return fetch(parkingLotsJSON)
            .then(response => response.json())
			.then((json) => {
				dispatch(getParkingLotsSuccess(json.data, airportName));
			})
			.catch((error) => {
				throw(error);
			});
	};
};