var express = require('express');
var router = express.Router();

var juegoController = require('../controllers/juego_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title:'Phrasales' });
});

router.get('/juego/question', juegoController.question);
router.get('/juego/answer', juegoController.answer);

module.exports = router;
