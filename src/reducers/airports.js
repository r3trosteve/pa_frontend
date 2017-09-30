const airportsReducer = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_AIRPORTS_SUCCESS':
			return action.airports;

		case 'GET_PARKING_LOTS_SUCCESS':
			return action.parkingLots;

		default:
			return state;
	}
};

export default airportsReducer;