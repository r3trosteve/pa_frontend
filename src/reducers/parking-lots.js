const parkingLotsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_PARKING_LOTS_SUCCESS':
			return action.parkingLots;

		default:
			return state;
	}
};

export default parkingLotsReducer;