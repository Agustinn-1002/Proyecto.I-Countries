const { Op } = require("sequelize");
const {Country, Activity} = require('../../db')

const postActivity = async (req, res) => {
    try {
        const {nombre,dificultad,duracion,temporada,paises} = req.body;
        if(nombre&&dificultad&&duracion&&temporada&&paises){
            const actividad={
                nombre,
                dificultad,
                duracion,
                temporada,
            }
            const createActivity = await Activity.create(actividad);
            const getCountriesName = await Country.findAll({
                where:{
                    nombre : {
                        [Op.in]: paises
                    }
                }
            })
            getCountriesName?.map(e=>e.addActivity(createActivity))
            if(createActivity)res.json({message: "Se creo correctamente la Actividad", data: createActivity})
            else res.json({message: "Error, no se obtuvieron suficientes datos"})
        }
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
}

module.exports = postActivity;