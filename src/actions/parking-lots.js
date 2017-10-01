import axios from 'axios';
import parkingLotsJSON from 'data/parking-lots.json';

export const getParkingLotsSuccess = (parkingLots, airportName) => {
	return {
		type: 'GET_PARKING_LOTS_SUCCESS',
		parkingLots, airportName
	};
};

export const getParkingLots = (airportName) => {
	return (dispatch) => {
		return axios.get(parkingLotsJSON)
			.then((parkingLots) => {
				dispatch(getParkingLotsSuccess(parkingLots.data, airportName));
			})
			.catch((error) => {
				throw(error);
			});
	};
};