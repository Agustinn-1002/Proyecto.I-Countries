const {Country, Activity} = require('../../db')

const getDataCountries = async (req, res) => {
    try {  
        const {name} = req.query;

        let orderName = req.query.orderName || 'nombre'
        let orderType = req.query.order || 'asc'

        const countries = await Country.findAll({
            attributes: ["id", "nombre", "flagImage", "continente", "poblacion", "capital", "subRegion", "area"],
            include:{
                model: Activity,
                attributes: ["nombre", "dificultad", "duracion", "temporada"],
                through: {
                    attributes: []
                }
            },
            order:[[orderName.toLowerCase() , orderType.toUpperCase()]]
        })
        if (!name) {
            res.status(200).json(countries)
        }else{
            const dataByName = countries.filter(e => e.nombre.toLowerCase().includes(name.toLowerCase()))
            dataByName.length?res.status(200).json(dataByName):res.json({"message": "Pais no Existente"})
        }
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}


module.exports = getDataCountries;
