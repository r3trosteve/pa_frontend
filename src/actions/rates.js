// GET RATES

export const getRatesSuccess = rates => {
    return {
        type: 'GET_RATES_SUCCESS',
        rates
    };
};

export function getRates(id) {
    return dispatch => {
        return fetch(`http://staging.back.parkingaccess.com/airport_parking/searches/${id}/rates`, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; version=1'
            }
        })
            .then(response => response.json())
            .then(json => dispatch(getRatesSuccess(json['airport_parking/rates'])))
            .catch(error => {
                throw(error);
            });
    };
}