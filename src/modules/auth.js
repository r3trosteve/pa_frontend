import 'isomorphic-fetch';
import setAuthorizationToken from '../utils/auth';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_USER = '@ssr/auth/set-current-user';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        default:
            return state;
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        user: user
    };
};

export const login = (data) => (dispatch) => {
    return fetch('http://staging.back.parkingaccess.com/sign_in', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json; version=1'
        }
    })
        .then((res) => {
            const token = res.headers.get('Access-Token');
            localStorage.setItem('jwtToken', token);
            setAuthorizationToken(token);
            dispatch(setCurrentUser(jwt.decode(token)));
        });
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
    };
};

// export function logout() {
//     return dispatch => {
//         localStorage.removeItem('jwtToken');
//         setAuthorizationToken(false);
//         dispatch(setCurrentUser({}));
//     }
// }