export const loadAirportsSuccess = airports => {
	return {
		type: 'LOAD_AIRPORTS_SUCCESS',
		airports
	};
};

export const loadAirports = () => {
  return dispatch => {
    return fetch('http://staging.back.parkingaccess.com/airports', {
			method: 'get',
			headers: {
				'Accept': 'application/json; version=1'
			}
		})
		.then(response => response.json())
		.then(json => dispatch(loadAirportsSuccess(json.airports)))
		.catch(error => {
			throw(error);
		});
  };
};