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

export function getCountriesByOrder (name='nombre',type='asc') {
    return async function (dispatch) {
        const countriesOrder = await axios.get(`${ruter}countries?orderName=${name}&order=${type}`);
        return dispatch({
            type: 'GET-ORDER-COUNTRIES',
            payload:countriesOrder.data,
            data: {
                name,
                type
            }
        })
    }}   

export function orderByContinent(continent = null) {
    return{
        type:'ORDER-BY-CONTINENT',
        payload: continent
    }
}

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

export function textSearch (search) {
    return {
        type: 'TEXT-SEARCH',
        payload: search
    }
}