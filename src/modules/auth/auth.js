import 'isomorphic-fetch';
import isEmpty from 'lodash/isEmpty';

const baseUrl = 'http://staging.back.parkingaccess.com/';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_PROFILE_UPDATED = 'USER_UPDATE';
export const USER_PASSWORD_UPDATED = 'USER_PASSWORD_UPDATED';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const RESET_PASSWORD_REQUESTED = 'RESET_PASSWORD_REQUESTED';

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
            return {
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export const setCurrentUser = (token) => (dispatch) => {
    return fetch(baseUrl + 'profile', {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1',
            'Access-Token': token
        }
    })
        .then(res => res.json())
        .then(data => {
            dispatch({
               type: SET_CURRENT_USER,
               user: data.user
            });
        });
};

export const login = (data) => (dispatch) => {
    return fetch(baseUrl + 'sign_in', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => {
            const token = res.headers.get('Access-Token');
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(token));
        });
};

export const signup = (data) => (dispatch) => {
    return fetch(baseUrl + 'sign_up', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json());
};

export const updateProfile = (data) => (dispatch) => {
    return fetch(baseUrl + 'profile', {
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
    return fetch(baseUrl + 'profile/change_password', {
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

export const resetPasswordRequest = (data) => (dispatch) => {
    return fetch(baseUrl + 'password_reset', {
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
    return fetch(baseUrl + 'password_reset', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(() => dispatch({  type: RESET_PASSWORD }));
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        dispatch({ type: USER_LOGOUT });
    };
};