const {Activity} = require('../../db')

const getActivity = async (req,res) =>{
    try {
        const activities = await Activity.findAll({
            attributes: ['nombre','dificultad','duracion','temporada'],
            order:['nombre','ASC']
        })
        res.status(200).json(activities)
    } catch (error) {
        res.status(404).json({"message": error.message})
    }
} 

module.exports = getActivity
