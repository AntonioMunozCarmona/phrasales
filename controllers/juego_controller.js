var models = require('../models/models.js');
//var pregunta = require('../models/pregunta.js');

//Definición de las variables
var BaseDatos = models.BaseDatos;
var preguntas=[],
  preguntasTexto=[];
var laPregunta ='', laEjemplo = '';
var count = 0,
  marcador =0,
  nuevo=0,
  resCorrecta=0;
//Importamos la función aleatorio
import {aleatorio} from '../models/pregunta.js';

exports.question = function (req, res) {

  BaseDatos.findAll().then(function (base) {
    preguntas = [];
    preguntasTexto = [];
    laPregunta = '';
    laEjemplo = '';
    count = base.length;
    console.log(`Desde juego_controller: ${count}`);
    resCorrecta = aleatorio(1, 4);
    console.log(`La respuesta correcta: ${resCorrecta}`);

    do {
      nuevo = aleatorio(1, count);

      // Si el elemento no se encuentra en preguntas[] agregar (push), en caso
      // de que sea se encuentre (continue;), saltar al siguente.
      if (preguntas.indexOf(nuevo)!==-1) {
        continue;
      } else {
        preguntas.push(nuevo);
      }

    } while (preguntas.length < 4);
    console.log(`El array de preguntas es: ${preguntas}`);

  }).then(function(base) {
    console.log(`Las preguntas son: ${preguntas} y la correcta es ${resCorrecta}`);

    BaseDatos.findById(preguntas[0]).then(function(base) {
      preguntasTexto[1] = base.Significado;
      if (resCorrecta === 1) {
        laPregunta = base.Pregunta;
        laEjemplo = base.EjempIng;
        console.log(`la Pregunta: ${laPregunta}`);
      }
      console.log(`la opcion 1 ${preguntasTexto[1]}`);

    }).then(function(base) {

      BaseDatos.findById(preguntas[1]).then(function(base) {
        preguntasTexto[2] = base.Significado;
        if (resCorrecta === 2) {
          laPregunta = base.Pregunta;
          laEjemplo = base.EjempIng;
          console.log(`la Pregunta: ${laPregunta}`);
        }
        console.log(`la opcion 2 ${preguntasTexto[2]}`);

      }).then(function(base) {

        BaseDatos.findById(preguntas[2]).then(function(base) {
          preguntasTexto[3] = base.Significado;
          if (resCorrecta === 3) {
            laPregunta = base.Pregunta;
            laEjemplo = base.EjempIng;
            console.log(`la Pregunta: ${laPregunta}`);
          }
          console.log(`la opcion 3 ${preguntasTexto[3]}`);

        }).then(function(base) {
          BaseDatos.findById(preguntas[3]).then(function(base) {
            preguntasTexto[4] = base.Significado;
            if (resCorrecta === 4) {
              laPregunta = base.Pregunta;
              laEjemplo = base.EjempIng;
              console.log(`la Pregunta: ${laPregunta}`);
            }
            console.log(`la opcion 4 ${preguntasTexto[4]}`);

          }).then(function(base) {

            res.render('juego/question', {
              marcador: marcador,
              pregunta: laPregunta,
              opcion1:preguntasTexto[1],
              opcion2:preguntasTexto[2],
              opcion3:preguntasTexto[3],
              opcion4:preguntasTexto[4]
            });
          });
        });
      });
    });
  });
};

//GET juego/answer
exports.answer = (req, res) => {
  console.log(`Respuesta ${req.query.opciones} => opcion${resCorrecta}`);

  if (req.query.opciones === `opcion${resCorrecta}`) {
    marcador = marcador +1;
    res.render('juego/answer', {
      marcador: marcador,
      respuesta: 'Correcto',
      pregunta: laPregunta,
      sign:preguntasTexto[resCorrecta],
      ejemplo: laEjemplo
    });
  } else {
    marcador = 0;
    res.render('juego/answer', {
      marcador: marcador,
      respuesta: '',
      pregunta: laPregunta,
      sign:preguntasTexto[resCorrecta],
      ejemplo: laEjemplo
    });
  }

};

//https://www.youtube.com/watch?v=FkGdzy79uSU
//https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database
