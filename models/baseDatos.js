//Definición del modelo de datos
//donde vamos a guardar los phrasals verbs

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BaseDatos',
  { Pregunta: DataTypes.STRING,
    Pron: DataTypes.STRING,
    Significado: DataTypes.STRING,
    Ejemp_Ing: DataTypes.STRING
    });
};
