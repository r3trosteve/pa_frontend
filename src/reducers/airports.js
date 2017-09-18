const airportsReducer = (state = [], action) => {
	switch(action.type) {
		case 'LOAD_AIRPORTS_SUCCESS':
			return action.airports

		default:
			return state
	}
}

export default airportsReducer