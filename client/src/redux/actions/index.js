import axios from 'axios';

const ruter = 'http://localhost:3001/'

export function getCountries () {
    return async function (dispatch) {
        const countries = await axios.get(`${ruter}countries`);
        return dispatch({
            type: 'GET-COUNTRY',
            payload:countries.data
        })
    } 

}