let apiBaseUrl;

if (process.env.NODE_ENV === 'production') {
    apiBaseUrl = 'https://back.parkingaccess.com/';
} else {
    apiBaseUrl = 'http://staging.back.parkingaccess.com/';
}

console.log(process.env.NODE_ENV, apiBaseUrl);

export default apiBaseUrl;