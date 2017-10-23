import axios from 'axios';

export default function setAuthorizationToken(token) {
	if (token) {
		axios.defaults.headers.common['Access-Token'] = `Bearer ${token}`;
	} else {
		delete axios.defaults.headers.common['Access-Token'];
	}
}