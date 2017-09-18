import axios from 'axios'
import airportsJSON from 'data/airports.json'

export const loadAirportsSuccess = (airports) => {
	return {
		type: 'LOAD_AIRPORTS_SUCCESS',
		airports
	}
}

export const loadAirports = () => {
	return (dispatch) => {
		return axios.get(airportsJSON)
			.then((airports) => {
				dispatch(loadAirportsSuccess(airports.data))
			})
			.catch((error) => {
				throw(error)
			})
	}
}