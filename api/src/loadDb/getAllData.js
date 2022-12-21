const {Country} = require('../db.js')
const axios = require('axios');

const rute = 'https://restcountries.com/v3/'

const getDataApi = async () => {
    const data = await Country.findAll()
    if (!data.length) {
        try {
            const dataApi = await axios.get(`${rute}all`)
            const data = dataApi.data.map(e => objData = {
                nombre: e.name.common,
                id: e.cca3,
                flagImage: e.flags[1],
                continente: e.continents[0],
                capital: e.capital?e.capital[0] : 'Capital no encontrada',
                subRegion: e.subregion?e.subregion : 'Subregion no encontrada',
                area: e.area,
                poblacion: e.population
            });
            await Country.bulkCreate(data); 
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = getDataApi