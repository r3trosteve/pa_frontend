import 'isomorphic-fetch';

export const POST_SEARCH = '@ssr/search/post';
export const LOAD_SEARCH = '@ssr/search/get';

const initialState = {
  data: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case POST_SEARCH:
      return Object.assign({}, state, { data: action.data });

    case LOAD_SEARCH:
      return Object.assign({}, ...state, { data: action.data });
  
    default:
      return state;
  }
}

export const postSearch = data => dispatch => {
  return fetch('http://staging.back.parkingaccess.com/airport_parking/searches/', {
    method: 'post',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json; version=1'
    }
  })
  .then(res => {
    return res.json();
  })
  .then(data => {
    dispatch({
      type: POST_SEARCH,
      data: data['airport_parking/search']
    });
  });
};

export const fetchSearch = id => dispatch => {
    return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json; version=1'
      }
    })
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch({
        type: LOAD_SEARCH,
        data: data['airport_parking/search']
      });
    });
  };