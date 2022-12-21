const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dificultad: {
        type: DataTypes.ENUM('1','2','3','4','5'),
        allowNull: false
    },
    duracion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    temporada: {
        type: DataTypes.ENUM('summer' , 'autumn' , 'winter' , 'spring'),
        allowNull: false
    }
  },{
    timestamps: false
  }
  );
};