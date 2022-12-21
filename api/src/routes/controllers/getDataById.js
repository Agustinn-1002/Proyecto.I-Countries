const {Country, Activity} = require('../../db.js')

const getDataById = async (req, res) => {
    try {  
        const {id} = req.params;
        const countrie = await Country.findAll({
            where: {
                id : id.toUpperCase()
            },
            attributes: ["id", "nombre", "flagImage", "continente", "poblacion", "capital", "subRegion", "area"],
            include:{
                model: Activity,
                attributes: ["nombre", "dificultad", "duracion", "temporada"],
                through: {
                    attributes: []
                }
            }
        })
        res.status(200).json(countrie)
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

module.exports = getDataById