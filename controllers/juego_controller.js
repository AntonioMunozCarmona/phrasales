//GET juego/question
exports.question = (req, res) => {
  res.render('juego/question', {pregunta: 'to get away',opcion1:"Manosear", opcion2:"Fardar",opcion3: "Vacaciones",opcion4: "Dormir la siesta"});

};

//GET juego/answer
exports.answer = (req, res) => {
  console.log("Respuesta"+req.query.opciones);
  console.log('La pregunta ');
  if (req.query.opciones === 'opcion_3'){
    res.render('juego/answer', {respuesta: 'Correcto'});
  } else {
    res.render('juego/answer', {respuesta: 'Incorrecto'});
  }

};
