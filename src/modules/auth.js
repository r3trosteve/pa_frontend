import 'isomorphic-fetch';
import jwt from 'jsonwebtoken';
import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const USER_SIGNUP = 'USER_SIGNUP';
export const USER_LOGOUT = 'USER_LOGOUT';

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

        case USER_LOGOUT:
            return {
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export const setCurrentUser = (token) => (dispatch) => {
    fetch('http://staging.back.parkingaccess.com/profile', {
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
    return fetch('http://staging.back.parkingaccess.com/sign_in', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then((res) => {
            const token = res.headers.get('Access-Token');
            localStorage.setItem('jwtToken', token);
            dispatch(setCurrentUser(token));
        });
};

export const signup = (data) => (dispatch) => {
    return fetch('http://staging.back.parkingaccess.com/sign_up', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json; version=1'
        }
    })
        .then(res => res.json());
};

export const logout = () => {
    return dispatch => {
        localStorage.removeItem('jwtToken');
        dispatch({
            type: USER_LOGOUT
        });
    };
};