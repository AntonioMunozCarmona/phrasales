// var models = require('../models/models.js');

export function aleatorio(inferior, superior) {
  var aleat =0;
  var numPosibilidades = superior - inferior;
  aleat = Math.random() * numPosibilidades;
  aleat = Math.floor(aleat);

  return parseInt(aleat)+inferior;
}


/*
module.exports.laspreguntas = function (objeto){
  var repetido = false;
  var largo, orden, c =0;
  var arrayPreg, conjunto = [];

  largo = models.BaseDatos.count().then(function(c) {
    console.log("There are " + largo + " projects!");
    while(arrayPreg.length < 4){
        var randomnumber = aleatorio(1, largo);
        console.log(randomnumber);
        var found = false;
        for(var i = 0; i<arrayPreg.length; i++){
        if(arrayPreg[i]==randomnumber){found=true;break}
        }
        if(!found)arrayPreg[arrayPreg.length]=randomnumber;
      }
  orden = aleatorio(1,4);
  // Recoger los resultados de la pregunta y las cuatro respuestas
  return arrayPreg;
  });
}

*/

