import axios from 'axios';
import parkingLotsJSON from 'data/parking-lots.json';

export const getParkingLotsSuccess = (parkingLots) => {
	return {
		type: 'GET_PARKING_LOTS_SUCCESS',
		parkingLots
	};
};

export const getParkingLots = () => {
	return (dispatch) => {
		return axios.get(parkingLotsJSON)
			.then((parkingLots) => {
				dispatch(getParkingLotsSuccess(parkingLots.data));
			})
			.catch((error) => {
				throw(error);
			});
	};
};