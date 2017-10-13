const ratesReducer = (state = [], action) => {
    switch(action.type) {
        case 'GET_RATES_SUCCESS':
            return action.rates;

        default:
            return state;
    }
};

export default ratesReducer;