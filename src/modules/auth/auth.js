import 'isomorphic-fetch';
import isEmpty from 'lodash/isEmpty';

import apiBaseUrl from '../config';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_LOGIN_REQUESTED = 'USER_LOGIN_REQUESTED';
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED';

export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_SIGNUP_REQUSTED = 'USER_SIGNUP_REQUSTED';
export const USER_SIGNUP_FAILED = 'USER_SIGNUP_FAILED';

export const USER_LOGOUT = 'USER_LOGOUT';

export const USER_PROFILE_UPDATED = 'USER_UPDATE';
export const USER_PASSWORD_UPDATED = 'USER_PASSWORD_UPDATED';

export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_REQUESTED = 'RESET_PASSWORD_REQUESTED';

const initialState = {
    isAuthenticated: false,
    user: {},
    error: ''
};

export default function reducer(state = initialState, action) {
    switch (action.type) {

        case USER_LOGIN_REQUESTED:
            return {
                error: ''
            };

        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        case USER_LOGIN_FAILED:
            return {
                error: action.error
            };

        case USER_SIGNUP_REQUSTED:
            return {
                error: ''
            };

        case USER_SIGNUP_FAILED:
            return {
                error: action.error
            };

        case USER_PROFILE_UPDATED:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };

        case USER_PASSWORD_UPDATED:
            return {
                isAuthenticated: true,
                user: action.user
            };

        case USER_LOGOUT:
            console.log('user logged out');
            return {
                isAuthenticated: false
            };

        default:
            return state;
    }
}

// login

export const setCurrentUser = (token) => (dispatch) => {
    return fetch(apiBaseUrl + 'profile', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-Token': token
        }
    })
        .then(handleErrors)
        .then(res => res.json())
        .then(data => {
            dispatch({
               type: SET_CURRENT_USER,
               user: data.user
            });
        })
        .catch(() => {
            localStorage.removeItem('jwtToken');
            dispatch({ type: USER_LOGOUT });
        });
};

export const login = (data) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUESTED });
    return fetch(apiBaseUrl + 'sign_in', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(handleErrors)
        .then(res => {
            const token = res.headers.get('Access-Token');
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(token));
        })
        .catch(() => {
            dispatch({
                type: USER_LOGIN_FAILED,
                error: 'Login or password are incorrect'
            });
        });
};

// signup

export const signup = (data) => (dispatch) => {
    dispatch({ type: USER_SIGNUP_REQUSTED });
    return fetch(apiBaseUrl + 'sign_up', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(handleErrors)
        .then(res => res.json())
        .then(() => dispatch({ type: USER_SIGNUP }))
        .catch(() => {
            dispatch({
                type: USER_SIGNUP_FAILED,
                error: 'This email is already taken'
            });
        });
};

// profile

export const updateProfile = (data) => (dispatch) => {
    return fetch(apiBaseUrl + 'profile', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: USER_PROFILE_UPDATED,
                user: data.user
            });
        });
};

export const updatePassword = (data) => (dispatch) => {
    return fetch(apiBaseUrl + 'profile/change_password', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-token': localStorage.jwtToken
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: USER_PASSWORD_UPDATED,
                user: data.user
            });
        });
};

// reset pwd

export const resetPasswordRequest = (data) => (dispatch) => {
    return fetch(apiBaseUrl + 'password_reset', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(() => dispatch({  type: RESET_PASSWORD_REQUESTED }));
};

export const resetPassword = (data) => (dispatch) => {
    return fetch(apiBaseUrl + 'password_reset', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(() => dispatch({  type: RESET_PASSWORD }));
};

// logout

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: USER_LOGOUT });
    };
};

// handle response error

export const handleErrors = res => {
    if (!res.ok) {
        throw Error(res.statusText);
    }
    return res;
};