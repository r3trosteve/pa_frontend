// helper function for getAirportSuggestions

export function getSuggestions(value, airports) {
	const escapedValue = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

	if (escapedValue === '') {
		return [];
	}

	const regex = new RegExp('^' + escapedValue, 'i');

	return airports.filter(airport => regex.test(airport.name) || regex.test(airport.code));
}