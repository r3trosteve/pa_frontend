const searchReducer = (state = {}, action) => {
	switch(action.type) {
		case 'POST_SEARCH_SUCCESS':
			return Object.assign({}, ...state, action.data);

		case 'GET_SEARCH_SUCCESS':
			return Object.assign({}, ...state, action.data);

		case 'GET_SEARCH_RATES_SUCCESS':
			console.log(typeof action.data);
			return Object.assign([], ...state, action.data);

		default:
			return state;
	}
};

export default searchReducer;