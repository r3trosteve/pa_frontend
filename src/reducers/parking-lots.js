const parkingLotsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_PARKING_LOTS_SUCCESS':
			return action.parkingLots = action.parkingLots
				.filter(item => item.airport === action.airportName);

		default:
			return state;
	}
};

export default parkingLotsReducer;