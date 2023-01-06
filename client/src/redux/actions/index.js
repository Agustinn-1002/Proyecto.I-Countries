import axios from 'axios';

const ruter = 'http://localhost:3001/'

export function getCountries () {
    return async function (dispatch) {
        const countries = await axios.get(`${ruter}countries`);
        return dispatch({
            type: 'GET-All-COUNTRIES',
            payload:countries.data
        })
    }}

export function getCountriesByName (name) {
    return {
        type: 'GET-COUNTRY-NAME',
        payload: name
    }    
}

export function getCountriesById (id) {
    return async function (dispatch){
        const countrie = await axios.get(`${ruter}countries/${id}`);
        return dispatch({
            type: 'GET-COUNTRY-BY-ID',
            payload:countrie.data
        })
    }
}

export function pageNumber (num) {
    return {
        type: 'PAGE-NUMBER',
        payload: num
    }
}