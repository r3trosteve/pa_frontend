import 'isomorphic-fetch';

export const USER_SIGNED_IN = '@ssr/auth/signed-in';

const initialState = {
    auth: {}
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case USER_SIGNED_IN:
            return Object.assign({}, state, { data: action.data });

        default:
            return state;
    }
}

export const authSignIn = (data) => (dispatch) => {
    return fetch('http://staging.back.parkingaccess.com/sign_in', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json; version=1'
        }
    })
        .then((res) => {
            console.log('Access-Token:', res.headers.get('Access-Token'));
            return res.json();
        })
        .then((data) => {
            dispatch({
                type: USER_SIGNED_IN,
                data: data,
                // token: data.headers.
                isAuth: true
            });
        });
};

