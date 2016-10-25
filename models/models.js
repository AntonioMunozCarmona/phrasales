var path = require('path');

//Posgress DATABASE_URL = postgres://user:/passwd@host:port/database
//SQLITE DATABASE_URL = sqlite://:@:/
var url = process.env.DATABASE_URL.match(/(.*)\:\/\/(.*?)\:(.*)@(.*)\:(.*)\/(.*)/);
var DBname = url[6]|| null;
var user = url[2]|| null;
var pwd = url[3]|| null;
var protocol = url[1]|| null;
var dialect = url[1]|| null;
var port = url[5]|| null;
var host = url[4]|| null;
var storage = process.env.DATABASE_STORAGE;

//Cargar modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite

var sequelize = new Sequelize(DBname, user, pwd,
  {dialect: dialect,
  protocol: protocol,
  port: port,
  host: host,
  storage: storage,   //Solo SQlite (.env)
  omitnull: true      //Solo Postgress
}
  );

//Importar la definicion de la tabla en baseDatos.js
var BaseDatos = sequelize.import(path.join(__dirname,'baseDatos'));

exports.BaseDatos = BaseDatos; //Exportar la definición de la tabla de phrasals verbs

// sequelize.sync() crea e inicia tabla de preguntas en DB
sequelize.sync().then(function() {

  // success(..) ejecuta el manejador una vez creada la tabla
  BaseDatos.count().then(function (count) {
    if (count === 0) { //La tabla se inicia solo si está vacía
      BaseDatos.bulkCreate([
        {
          Pregunta:'(Not) care for someone/something',
          Pron:'nɒt keə fə ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'No interesar/ no gustar',
          EjempIng:"I don't care for football."
        },
        {
          Pregunta:'ADD UP',
          Pron:'',
          Significado:'Totalizar',
          EjempIng:'When you have added up all the money you have spent today, you`ll get a shock!'
        },
        {
          Pregunta:'ADD UP TO',
          Pron:'',
          Significado:'Alcanzar un total',
          EjempIng:'Seven and five add up to twelve.'
        },
        {
          Pregunta:'ANSWER BACK',
          Pron:'',
          Significado:'Contestar de malos modos',
          EjempIng:''
        },
        {
          Pregunta:'ANSWER FOR',
          Pron:'',
          Significado:'Rresponder de',
          EjempIng:''
        },
        {
          Pregunta:'ASK ABOUT',
          Pron:'',
          Significado:'Preguntar por (un asunto)',
          EjempIng:''
        },
        {
          Pregunta:'ASK AFTER',
          Pron:'',
          Significado:'Preguntar por la salud',
          EjempIng:''
        },
        {
          Pregunta:'ASK BACK',
          Pron:'',
          Significado:'Invitar a volver',
          EjempIng:''
        },
        {
          Pregunta:'ASK DOWN',
          Pron:'',
          Significado:'Invitar a bajar',
          EjempIng:''
        },
        {
          Pregunta:'ASK FOR',
          Pron:'',
          Significado:'Pedir, preguntar por',
          EjempIng:''
        },
        {
          Pregunta:'ASK IN',
          Pron:'',
          Significado:'Invitar a entrar',
          EjempIng:''
        },
        {
          Pregunta:'ASK OUT',
          Pron:'',
          Significado:'Invitar a salir',
          EjempIng:''
        },
        {
          Pregunta:'ASK UP',
          Pron:'',
          Significado:'Invitar a subir',
          EjempIng:''
        },
        {
          Pregunta:'ASK UP TO',
          Pron:'',
          Significado:'Pedir hasta (un precio)',
          EjempIng:''
        },
        {
          Pregunta:'Ask someone out',
          Pron:'ɑːsk ˈsʌmwʌn aʊt',
          Significado:'Pedirle salir/una cita a alguien',
          EjempIng:'Tom asked Janet out to dinner.'
        },
        {
          Pregunta:'BACK AWAY',
          Pron:'',
          Significado:'Retroceder',
          EjempIng:''
        },
        {
          Pregunta:'BACK OUT',
          Pron:'',
          Significado:'Volver atrás',
          EjempIng:''
        },
        {
          Pregunta:'Back someone up',
          Pron:'ˈbæk ˈsʌmwʌn ʌp',
          Significado:'Apoyar/respaldar/ reforzar',
          EjempIng:'My family always backs me up in my decisions.'
        },
        {
          Pregunta:'BE ABOUT',
          Pron:'',
          Significado:'Estar por (un lugar)',
          EjempIng:''
        },
        {
          Pregunta:'BE AWAY',
          Pron:'',
          Significado:'Estar fuera',
          EjempIng:''
        },
        {
          Pregunta:'BE BACK',
          Pron:'',
          Significado:'Estar de vuelta',
          EjempIng:''
        },
        {
          Pregunta:'BE FOR',
          Pron:'',
          Significado:'Estar a favor de',
          EjempIng:''
        },
        {
          Pregunta:'BE IN',
          Pron:'',
          Significado:'Estar en casa',
          EjempIng:''
        },
        {
          Pregunta:'BE OFF',
          Pron:'',
          Significado:'Irse, estar apagado',
          EjempIng:''
        },
        {
          Pregunta:'BE ON',
          Pron:'',
          Significado:'Estar encendido',
          EjempIng:''
        },
        {
          Pregunta:'BE OUT',
          Pron:'',
          Significado:'Estar fuera',
          EjempIng:''
        },
        {
          Pregunta:'BE OVER',
          Pron:'',
          Significado:'Estar acabado',
          EjempIng:''
        },
        {
          Pregunta:'BE UP',
          Pron:'',
          Significado:'Estar levantado',
          EjempIng:''
        },
        {
          Pregunta:'BEND DOWN',
          Pron:'',
          Significado:'Agacharse',
          EjempIng:''
        },
        {
          Pregunta:'BEND OVER',
          Pron:'',
          Significado:'Inclinarse',
          EjempIng:''
        },
        {
          Pregunta:'BLOW AWAY',
          Pron:'',
          Significado:'Llevarse (el viento)',
          EjempIng:''
        },
        {
          Pregunta:'BLOW DOWN',
          Pron:'',
          Significado:'Derrumbarse por el viento',
          EjempIng:''
        },
        {
          Pregunta:'BLOW OFF',
          Pron:'',
          Significado:'Dejar salir (el vapor)',
          EjempIng:''
        },
        {
          Pregunta:'BLOW OUT',
          Pron:'',
          Significado:'Apagar (se) (una llama)',
          EjempIng:''
        },
        {
          Pregunta:'Blow up',
          Pron:'bləʊ ʌp',
          Significado:'(Hacer) explotar',
          EjempIng:'The bomb might blow up if someone touches it. '
        },
        {
          Pregunta:'Blow something up',
          Pron:'bləʊ ˈsʌmθɪŋ ʌp',
          Significado:'Hinchar/inflar',
          EjempIng:'The little boy blew up lots of balloons for his birthday party.'
        },
        {
          Pregunta:'BREAK AWAY',
          Pron:'',
          Significado:'Soltarse',
          EjempIng:''
        },
        {
          Pregunta:'Break down',
          Pron:'breɪk daʊn',
          Significado:'Averiarse',
          EjempIng:'Sorry I’m late! My car broke down on my way to work.'
        },
        {
          Pregunta:'Break down',
          Pron:'breɪk daʊn',
          Significado:'Derrumbarse emocionalmente',
          EjempIng:'He broke down in tears when he heard the bad news.'
        },
        {
          Pregunta:'Break in',
          Pron:'breɪk ɪn',
          Significado:'Forzar la entrada',
          EjempIng:'Somebody broke in our house last night.'
        },
        {
          Pregunta:'BREAK OFF',
          Pron:'',
          Significado:'Romper (se) (relaciones)',
          EjempIng:''
        },
        {
          Pregunta:'Break out',
          Pron:'breɪk aʊt',
          Significado:'Escapar de prisión',
          EjempIng:'The prisoners broke out from prison.'
        },
        {
          Pregunta:'Break out',
          Pron:'breɪk aʊt',
          Significado:'Surgir de manera inesperada',
          EjempIng:'Panic broke out suddenly.'
        },
        {
          Pregunta:'Break through',
          Pron:'breɪk θruː',
          Significado:'Atravesar un obstáculo',
          EjempIng:'The thief broke through the crowded street.'
        },
        {Pregunta:'Break up',
        Pron:'breɪk ʌp',
        Significado:'Acabar con una relación',
        EjempIng:'My boyfriend and I broke up two months ago.'
      },
        {
          Pregunta:'BRING ABOUT',
          Pron:'',
          Significado:'Acarrear',
          EjempIng:''
        },
        {
          Pregunta:'BRING ALONG',
          Pron:'',
          Significado:'Traer (consigo)',EjempIng:''
        },
        {
          Pregunta:'BRING BACK',
          Pron:'',
          Significado:'Devolver',
          EjempIng:''
        },
        {
          Pregunta:'BRING DOWN',
          Pron:'',
          Significado:'Derribar, rebajar',
          EjempIng:''
        },
        {
          Pregunta:'BRING IN',
          Pron:'',
          Significado:'Hacer entrar',
          EjempIng:''
        },
        {
          Pregunta:'BRING OUT',
          Pron:'',
          Significado:'Hacer salir, publicar',
          EjempIng:''
        },
        {
          Pregunta:'Bring someone down',
          Pron:'brɪŋ ˈsʌmwʌn daʊn',
          Significado:'Entristecer',
          EjempIng:'Every time I listen to this song, it brings me down.'
        },
        {
          Pregunta:'Bring someone up',
          Pron:'brɪŋ ˈsʌmwʌn ʌp',
          Significado:'Criar',
          EjempIng:'I was born in London but I was brought up in Madrid.'
        },
        {
          Pregunta:'Bring something back',
          Pron:'brɪŋ ˈsʌmθɪŋ ˈbæk',
          Significado:'Devolver/volver a traer algo',
          EjempIng:'Remember to bring your books back to the school library.'
        },
        {
          Pregunta:'Bring something up',
          Pron:'brɪŋ ˈsʌmθɪŋ ʌp',
          Significado:'Mencionar algo',
          EjempIng:'The boss brought up an important issue at the meeting.'
        },
        {
          Pregunta:'BRUN AWAY',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          EjempIng:''
        },
        {
          Pregunta:'BRUSH OFF',
          Pron:'',
          Significado:'Quitar el polvo',
          EjempIng:''
        },
        {
          Pregunta:'BURN AWAY',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          EjempIng:''
        },
        {
          Pregunta:'BURN DOWN',
          Pron:'',
          Significado:'Derrumbarse (por el fuego)',
          EjempIng:''
        },
        {
          Pregunta:'BURN OUT',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          EjempIng:''
        },
        {
          Pregunta:'BURN UP',
          Pron:'',
          Significado:'Consumirse (por el fuego)',
          EjempIng:''
        },
        {
          Pregunta:'BUY FOR',
          Pron:'',
          Significado:'Comprar por o para',
          EjempIng:''
        },
        {
          Pregunta:'BUY OVER',
          Pron:'',
          Significado:'Sobornar',
          EjempIng:''
        },
        {
          Pregunta:'BUY UP',
          Pron:'',
          Significado:'Acaparar',
          EjempIng:''
        },
        {
          Pregunta:'CALL AT',
          Pron:'',
          Significado:'Hacer una visita, hacer escala',
          EjempIng:''
        },
        {
          Pregunta:'CALL AWAY',
          Pron:'',
          Significado:'Seguir llamando',
          EjempIng:''
        },
        {
          Pregunta:'CALL DOWN',
          Pron:'',
          Significado:'Llamar (a alguien) para que baje',
          EjempIng:''
        },
        {
          Pregunta:'CALL FOR',
          Pron:'',
          Significado:'Pedir a voces, exigir',
          EjempIng:''
        },
        {
          Pregunta:'CALL IN',
          Pron:'',
          Significado:'Llamar (a alguien) para que entre',
          EjempIng:''
        },
        {
          Pregunta:'Call on someone',
          Pron:'kɔːl ɒn ˈsʌmwʌn',
          Significado:'Visitar a alguien',
          EjempIng:'I’m going to call on some friends in London.'
        },
        {
          Pregunta:'Call out',
          Pron:'kɔːl aʊt',
          Significado:'Hablar en un tono elevado',
          EjempIng:'The teacher was calling out our names so that we could all listen.'
        },
        {
          Pregunta:'CALL OVER',
          Pron:'',
          Significado:'Pasar lista, enumerar',
          EjempIng:''
        },
        {
          Pregunta:'Call someone back',
          Pron:'kɔːl ˈsʌmwʌn ˈbæk',
          Significado:'Devolver la llamada',
          EjempIng:'I can’t speak right now. I will call you back later.'
        },
        {
          Pregunta:'Call someone up',
          Pron:'kɔːl ˈsʌmwʌn ʌp',
          Significado:'Telefonear a alguien',
          EjempIng:'She used to call me up in the middle of the night.'
        },
        {
          Pregunta:'Call something off',
          Pron:'kɔːl ˈsʌmθɪŋ ɒf',
          Significado:'Cancelar',
          EjempIng:'The match was called off.'
        },
        {
          Pregunta:'Care for someone',
          Pron:'keə fə ˈsʌmwʌn',
          Significado:'Cuidar a alguien',
          EjempIng:'I’m caring for my ill grandma.'
        },
        {
          Pregunta:'CARRY ALONG',
          Pron:'',
          Significado:'Persuadir',
          EjempIng:''
        },
        {
          Pregunta:'CARRY OFF',
          Pron:'',
          Significado:'Llevarse a la fuerza',
          EjempIng:''
        },
        {
          Pregunta:'Carry on',
          Pron:'ˈkæri ɒn',
          Significado:'Continuar haciendo algo',
          EjempIng:'Carry on with your work in silence!'
        },
        {
          Pregunta:'Carry out',
          Pron:'kæri aʊt',
          Significado:'Hacer/llevar a cabo',
          EjempIng:'He carried out an experiment.'
        },
        {
          Pregunta:'Catch on to',
          Pron:'kætʃ ɒn tuː',
          Significado:'Comprender/entender',
          EjempIng:'Although he knew nothing about the lesson, he caught on very quickly.'
        },
        {
          Pregunta:'Catch up',
          Pron:'kætʃ ʌp',
          Significado:'Ponerse a la altura de/alcanzar el ritmo de',
          EjempIng:
          'The teacher told me I´ll have to work very hard if I wanted to catch up with the rest of my classmates.'
        },
        {
          Pregunta:'Check in',
          Pron:'tʃek ɪn',
          Significado:'Registrarse en un hotel/aeropuerto',
          EjempIng:'After we checked in, we looked for the boarding gate.'
        },
        {
          Pregunta:'Check something out',
          Pron:'tʃek ˈsʌmθɪŋ aʊt ',
          Significado:'Fijarse en algo (porque vale la pena)',
          EjempIng:'Check out that car!! It’s awesome!!'
        },
        {
          Pregunta:'Cheer up',
          Pron:'tʃɪər ʌp ',
          Significado:'Alegrar(se)',
          EjempIng:'She cheered up when she knew she had passed all her exams.'
        },
        {
          Pregunta:'Chip in',
          Pron:'tʃɪp ɪn ',
          Significado:'Contribuir con (económica, ayuda)',
          EjempIng:'All the students chipped in 5 euros and bought the teacher a present.'
        },
        {
          Pregunta:'Chop up',
          Pron:'tʃɒp ʌp',
          Significado:'Cortar en pedazos (con un cuchillo/hacha)',
          EjempIng:'The cooked chopped up some bananas.'
        },
        {
          Pregunta:'Clean something up',
          Pron:'kliːn ˈsʌmθɪŋ ʌp ',
          Significado:'Recoger',
          EjempIng:'You must clean up your bedroom if you want to watch TV.'
        },

        {
          Pregunta:'CLEAR AWAY',
          Pron:'',
          Significado:'Dispersar (se)',
          EjempIng:''
        },
        {
          Pregunta:'CLEAR OFF',
          Pron:'',
          Significado:'Marcharse',
          EjempIng:''
        },
        {
          Pregunta:'CLEAR OUT',
          Pron:'',
          Significado:'Marcharse',
          EjempIng:''
        },
        {
          Pregunta:'CLEAR UP',
          Pron:'',
          Significado:'Aclararse (el tiempo,un misterio)',
          EjempIng:''
        },
        {
          Pregunta:'CLOSE DOWN',
          Pron:'',
          Significado:'Cerrar',
          EjempIng:''
        },
        {
          Pregunta:'CLOSE UP',
          Pron:'',
          Significado:'Acercarse',
          EjempIng:''
        },
        {
          Pregunta:'COME ABOUT',
          Pron:'',
          Significado:'Suceder',
          EjempIng:''
        },
        {
          Pregunta:'Come across something/someone',
          Pron:'kʌm əˈkrɒs ˈsʌmθɪŋ ˈsʌmwʌn',
          Significado:'Encontrar algo/a alguien por casualidad',
          EjempIng:'I came across my lost earring while I was sweeping the floor.'
        },
        {
          Pregunta:'COME AFTER',
          Pron:'',
          Significado:'Seguir',
          EjempIng:''
        },
        {
          Pregunta:'Come along',
          Pron:'kʌm əˈlɒŋ',
          Significado:'Marchar',
          EjempIng:'Everything is coming along perfectly well.'
        },
        {
          Pregunta:'Come along',
          Pron:'kʌm əˈlɒŋ',
          Significado:'Acompañar',EjempIng:'Come along with me to the bus stop.'},
        {
          Pregunta:'Come around',
          Pron:'kʌm əˈraʊnd ',
          Significado:'Hacer una visita',EjempIng:'You must come around to visit next week.'},
        {
          Pregunta:'COME AT',
          Pron:'',
          Significado:'Embestir',
          EjempIng:''
        },
        {
          Pregunta:'COME AWAY',
          Pron:'',
          Significado:'Desprenderse',EjempIng:''
        },
        {
          Pregunta:'COME BACK',
          Pron:'',
          Significado:'Regresar, volver',
          EjempIng:''
        },
        {
          Pregunta:'COME DOWN',
          Pron:'',
          Significado:'Bajar',
          EjempIng:''
        },
        {
          Pregunta:'COME FOR',
          Pron:'',
          Significado:'Venir por (en busca de)',
          EjempIng:''
        },
        {
          Pregunta:'Come from somewhere',
          Pron:'kʌm frəm ˈsʌmweə',
          Significado:'Ser originario de',
          EjempIng:'She is from Denmark.'
        },
        {
          Pregunta:'COME IN',
          Pron:'',
          Significado:'Entrar',
          EjempIng:''
        },
        {
          Pregunta:'COME OFF',
          Pron:'',
          Significado:'Desprenderse',
          EjempIng:''
        },
        {
          Pregunta:'COME ON',
          Pron:'',
          Significado:'¡Vamos! (en imperativo)',
          EjempIng:''

        },
        {
          Pregunta:'COME OUT',
          Pron:'',
          Significado:'Salir',
          EjempIng:''
        },
        {
          Pregunta:'COME TO',
          Pron:'',
          Significado:'Ascender (una suma), volver en sí.',
          EjempIng:''
        },
        {
          Pregunta:'COME UP',
          Pron:'',
          Significado:'Subir',
          EjempIng:''
        },
        {
          Pregunta:'COME UP TO',
          Pron:'',
          Significado:'Acercarse a',
          EjempIng:''
        },
        {
          Pregunta:'COUNT IN',
          Pron:'',
          Significado:'Incluir',
          EjempIng:''
        },
        {
          Pregunta:'Count on someone/something',
          Pron:'kaʊnt ɒn ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Contar con alguien',
          EjempIng:'You can count on me.'
        },
        {
          Pregunta:'COUNT UP',
          Pron:'',
          Significado:'Calcular',
          EjempIng:''
        },
        {
          Pregunta:'COUNT UP TO',
          Pron:'',
          Significado:'Contar hasta',
          EjempIng:''
        },
        {
          Pregunta:'CRY FOR',
          Pron:'',
          Significado:'Pedir llorando',
          EjempIng:''
        },
        {
          Pregunta:'Cry out',
          Pron:'kraɪ aʊt ',
          Significado:'Chillar/gritar',
          EjempIng:'She cried out in pain.'
        },
        {
          Pregunta:'CRY OVER',
          Pron:'',
          Significado:'Lamentarse',
          EjempIng:''
        },
        {
          Pregunta:'CRY TO',
          Pron:'',
          Significado:'Llamar a gritos',
          EjempIng:''
        },
        {
          Pregunta:'Cut back',
          Pron:'kʌt ˈbæk',
          Significado:'Reducir la cantidad',
          EjempIng:'He has cut back on drinking.'
        },
        {
          Pregunta:'Cut back on something',
          Pron:'kʌt ˈbæk ɒn ˈsʌmθɪŋ ',
          Significado:'Reducir el consumo',
          EjempIng:'I must cut back on sugary drinks if I want to lose some weight.'
        },
        {
          Pregunta:'CUT DOWN',
          Pron:'',
          Significado:'Reducir gastos, talar',
          EjempIng:''
        },
        {
          Pregunta:'CUT IN',
          Pron:'',
          Significado:'Interrumpir',
          EjempIng:''
        },
        {
          Pregunta:'CUT OFF',
          Pron:'',
          Significado:'Separar de un tajo',
          EjempIng:''
        },
        {
          Pregunta:'CUT OUT',
          Pron:'',
          Significado:'Recortar, omitir',
          EjempIng:''
        },
        {
          Pregunta:'CUT THROUGH',
          Pron:'Acortar por un atajo',
          Significado:'',
          EjempIng:''
        },
        {
          Pregunta:'CUT UP',
          Pron:'Trinchar, triturar',
          Significado:'',
          EjempIng:''
        },
        {
          Pregunta:'Cut something down',
          Pron:'kʌt ˈsʌmθɪŋ daʊn',
          Significado:'Talar',
          EjempIng:'They cut the oldest tree in the forest.'
        },
        {
          Pregunta:'Cut something off',
          Pron:'kʌt ˈsʌmθɪŋ ɒf ',
          Significado:'Cortar el suministro',
          EjempIng:'The gas company cut me off.'
        },
        {
          Pregunta:'Cut something out',
          Pron:'kʌt ˈsʌmθɪŋ aʊt ',
          Significado:'Recortar',
          EjempIng:'I cut this ad out of the newspaper.'
        },
        {
          Pregunta:'Deal with',
          Pron:'diːl wɪð ',
          Significado:'Tratar',
          EjempIng:'He deals with difficult customers every day.'
        },
        {
          Pregunta:'Die away',
          Pron:'daɪ əˈweɪ ',
          Significado:'Difuminarse/desvanecerse',
          EjempIng:'The strange sound died away.'
        },
        {
          Pregunta:'DIE DOWN',
          Pron:'',
          Significado:'Apaciguarse',
          EjempIng:''
        },
        {
          Pregunta:'DIE OUT',
          Pron:'',
          Significado:'Extinguirse',
          EjempIng:''
        },
        {
          Pregunta:'DO UP',
          Pron:'',
          Significado:'Abrochar',
          EjempIng:''
        },
        {
          Pregunta:'Do something up',
          Pron:'də ˈsʌmθɪŋ ʌp ',
          Significado:'Abrochar/atar/subirse',
          EjempIng:'Do up your zipper!'
        },
        {
          Pregunta:'Do without',
          Pron:'də wɪðˈaʊt',
          Significado:'Prescindir de',
          EjempIng:'I can’t do without my mobile.'
        },
        {
          Pregunta:'DRAW AWAY',
          Pron:'',
          Significado:'Alejarse',
          EjempIng:''
        },
        {
          Pregunta:'DRAW BACK',
          Pron:'',
          Significado:'Retroceder',
          EjempIng:''
        },
        {
          Pregunta:'DRAW DOWN',
          Pron:'',
          Significado:'Bajar',
          EjempIng:''
        },
        {
          Pregunta:'DRAW IN',
          Pron:'',
          Significado:'Economizar, encoger (se)',
          EjempIng:''
        },
        {
          Pregunta:'DRAW OFF',
          Pron:'',
          Significado:'Apartarse',
          EjempIng:''
        },
        {
          Pregunta:'DRAW ON',
          Pron:'',
          Significado:'Aproximarse, retirar fondos',
          EjempIng:''
        },
        {
          Pregunta:'DRAW OUT',
          Pron:'',
          Significado:'Sacar, redactar, alargarse (el día)',
          EjempIng:''
        },
        {
          Pregunta:'DRAW UP',
          Pron:'',
          Significado:'Para (un vehículo)',
          EjempIng:''
        },
        {
          Pregunta:'Dress up',
          Pron:'dres ʌp ',
          Significado:'Vestirse de manera formal',
          EjempIng:'We must dress up for a formal event.'
        },
        {
          Pregunta:'DRIVE AWAY',
          Pron:'',
          Significado:'Ahuyentar, alejarse en coche',
          EjempIng:''
        },
        {
          Pregunta:'DRIVE BACK',
          Pron:'',
          Significado:'Rechazar',
          EjempIng:''
        },
        {
          Pregunta:'DRIVE BY',
          Pron:'',Significado:'Pasar en coche',
          EjempIng:''
        },
        {
          Pregunta:'DRIVE IN',
          Pron:'',
          Significado:'Entrar en coche, introducir',
          EjempIng:''
        },
        {
          Pregunta:'DRIVE OFF',
          Pron:'',
          Significado:'Alejarse en coche, ahuyentar',
          EjempIng:''
        },
        {
          Pregunta:'DRIVE OUT',
          Pron:'',
          Significado:'Salir en coche, expulsar',
          EjempIng:''
        },
        {
          Pregunta:'Drop in',
          Pron:'drɒp ɪn',
          Significado:'Acudir sin cita previa',
          EjempIng:'I might drop in for a while next week.'
        },
        {
          Pregunta:'Drop out',
          Pron:'drɒp aʊt',
          Significado:'Dejar de ir/abandonar',
          EjempIng:'I dropped out of the German class because I couldn’t catch up with the level.'
        },
        {
          Pregunta:'Drop someone/something off',
          Pron:'drɒp ˈsʌmwʌn ˈsʌmθɪŋ ɒf',
          Significado:'Llevar a alguien a un sitio y dejarlo allí',
          EjempIng:'I have to drop my mum off at the doctor before I go to work.'
        },
        {
          Pregunta:'EAT AWAY',
          Pron:'',
          Significado:'Erosionar,  roer, carcomer, corroer, desgastar.',
          EjempIng:''
        },
        {
          Pregunta:'EAT INTO',
          Pron:'',
          Significado:'Roer,  corroer, comerse.',
          EjempIng:''
        },
        {
          Pregunta:'Eat out',
          Pron:'iːt aʊt',
          Significado:'Comer fuera de casa',
          EjempIng:'She is a terrible cook that’s why she eats out quite often.'
        },
        {
          Pregunta:'EAT UP',
          Pron:'',
          Significado:'Devorar,  comerse, consumir, tragar, devorar.',
          EjempIng:''
        },
        {
          Pregunta:'EGG ON',
          Pron:'',
          Significado:'Animar, incitar.',
          EjempIng:''
        },
        {
          Pregunta:'END IN',
          Pron:'',
          Significado:'Acabar en, terminar con.',
          EjempIng:''
        },
        {
          Pregunta:'END OFF',
          Pron:'',
          Significado:'Acabar, terminar, ir a parar',
          EjempIng:''
        },
        {
          Pregunta:'End up',
          Pron:'end ʌp',
          Significado:'Terminar/acabar',
          EjempIng:'We ended up going to my house instead of going to the disco.'
        },
        {
          Pregunta:'Face up to',
          Pron:'feɪs ʌp tuː',
          Significado:'Aceptar/asumir (situación difícil)',
          EjempIng:'She faced up to it bravely'
        },
        {
          Pregunta:'FALL ABOUT',
          Pron:'',
          Significado:'Troncharse, partirse (de risa).',
          EjempIng:''
        },
        {
          Pregunta:'FALL APART',
          Pron:'',
          Significado:'Romperse, deshacerse, caerse a pedazos.',
          EjempIng:''
        },
        {
          Pregunta:'FALL AWAY',
          Pron:'',
          Significado:'Disminuir/desaparecer/desprenderse.',
          EjempIng:''
        },
        {
          Pregunta:'FALL BACK',
          Pron:'',
          Significado:'Retroceder, retirarse.',
          EjempIng:''
        },
        {
          Pregunta:'FALL BACK ON TO',
          Pron:'',
          Significado:'Recurrir a, echar mano de, apoyarse en.',
          EjempIng:''
        },
        {
          Pregunta:'FALL BEHIND',
          Pron:'',
          Significado:'Retrasarse, quedarse atrás, rezagarse.',
          EjempIng:''
        },
        {
          Pregunta:'FALL BEHIND WITH',
          Pron:'',
          Significado:'Retrasarse.',
          EjempIng:''
        },
        {
          Pregunta:'Fall down',
          Pron:'fɔːl daʊn',
          Significado:'Caerse',
          EjempIng:'He fell down the ladder while he was painting.'
        },
        {
          Pregunta:'Fall for',
          Pron:'fɔːl fɔː',
          Significado:'Enamorarse/Sentirse atraído por alguien',
          EjempIng:'He fell for a girl who is in my class.'
        },
        {
          Pregunta:'FALL IN',
          Pron:'',
          Significado:'Desplomarse, venirse abajo/ alinearse, formar filas, ponerse en filas.',
          EjempIng:''
        },
        {
          Pregunta:'FALL IN LOVE',
          Pron:'',
          Significado:'Enamorarse de.',
          EjempIng:''
        },
        {
          Pregunta:'FALL IN WITH',
          Pron:'',
          Significado:'Encontrarse con, juntarse con/convenir en, aprobar, aceptar',
          EjempIng:''
        },
        {
          Pregunta:'FALL INTO',
          Pron:'',
          Significado:'Dividirse en, clasificarse en/ adquirir.',
          EjempIng:''
        },
        {
          Pregunta:'FALL OFF',
          Pron:'',
          Significado:'Bajar, disminuir/ empeorar/ desprenderse, caerse.',
          EjempIng:''
        },
        {
          Pregunta:'FALL ON',
          Pron:'',
          Significado:'Incidir en, recaer en, tocar a/atacar, caer sobre.',
          EjempIng:''
        },
        {
          Pregunta:'Fall out of (love)',
          Pron:'fɔːl aʊt əv lʌv',
          Significado:'Dejar de amar',
          EjempIng:'My girlfriend broke up with me because she said she had fallen out of love.'
        },
        {
          Pregunta:'FALL OVER',
          Pron:'',
          Significado:'Caer, tropezar con/ caerse',
          EjempIng:''
        },
        {
          Pregunta:'FALL THROUGH',
          Pron:'',
          Significado:'Fracasar, quedar en nada.',
          EjempIng:''
        },
        {
          Pregunta:'FALL TO',
          Pron:'',
          Significado:'Empezar a, ponerse a/ corresponder a, incumbir a, tocar a.',
          EjempIng:''
        },
        {
          Pregunta:'FALL UNDER',
          Pron:'',
          Significado:'Clasificarse en, estar incluido,-a en.',
          EjempIng:''
        },
        {
          Pregunta:'Fasten up',
          Pron:'ˈfɑːsn̩ ʌp',
          Significado:'Abrochar',
          EjempIng:'Fasten up your seatbelts.'
        },
        {
          Pregunta:'FEEL FOR',
          Pron:'',
          Significado:'Compadecer a, compadecerse de.',
          EjempIng:''
        },
        {
          Pregunta:'FEEL UP TO',
          Pron:'',
          Significado:'Sentirse con ánimos para, sentirse con fuerzas para.',
          EjempIng:''
        },
        {
          Pregunta:'Fiddle about/around',
          Pron:'ˈfɪdl̩ əˈbaʊt əˈraʊnd',
          Significado:'Estar perdiendo el tiempo',
          EjempIng:'He began to fiddle around taking silly pictures.'
        },
        {
          Pregunta:'Fight back',
          Pron:'faɪt ˈbæk',
          Significado:'Contraatacar',
          EjempIng:'The victim shouldn’t have fought back.'
        },
        {
          Pregunta:'FIGHT OFF',
          Pron:'',
          Significado:'Ahuyentar',
          EjempIng:''
        },
        {
          Pregunta:'FIGHT ON',
          Pron:'',
          Significado:'Seguir luchando',
          EjempIng:''
        },
        {
          Pregunta:'FIGHT UP',
          Pron:'',
          Significado:'Luchar valerosamente',
          EjempIng:''
        },
        {
          Pregunta:'Figure   something   out',
          Pron:'ˈfɪɡə ˈsʌmθɪŋ aʊt',
          Significado:'Encontrar la respuesta/averiguar',
          EjempIng:'I need to  figure out  if a crime happened here.'
        },
        {
          Pregunta:'FIGURE ON',
          Pron:'',
          Significado:'Contar con, esperar.',
          EjempIng:''
        },
        {
          Pregunta:'Fill   something   in',
          Pron:'fɪl ˈsʌmθɪŋ ɪn',
          Significado:'Rellenar huecos (con información)',
          EjempIng:'Fill in the blanks with the correct tense of the verb in brackets.'
        },
        {
          Pregunta:'FILL IN FOR',
          Pron:'',
          Significado:'Sustituir a.',
          EjempIng:''
        },
        {
          Pregunta:'FILL OUT',
          Pron:'',
          Significado:'Engordar/rellenar.',
          EjempIng:''
        },
        {
          Pregunta:'FILL UP',
          Pron:'',
          Significado:'Rellenar, llenar',
          EjempIng:''
        },
        {
          Pregunta:'Find something out',
          Pron:'faɪnd ˈsʌmθɪŋ aʊt',
          Significado:'Descubrir/averiguar',
          EjempIng:'We don´t know what happened but we will find it out.'
        },
        {
          Pregunta:'Finish   off',
          Pron:'ˈfɪnɪʃ ɒf',
          Significado:'Terminar completamente',
          EjempIng:'I have to finish off the report before I leave.'
        },
        {
          Pregunta:'Finish   with',
          Pron:'ˈfɪnɪʃ wɪð',
          Significado:'Terminar una relación',
          EjempIng:'He finished with his girlfriend'
        },
        {
          Pregunta:'Fire off',
          Pron:'ˈfaɪər ɒf',
          Significado:'Disparar/ bombardear (balas/preguntas/emails…)',
          EjempIng:'The audience fired off questions to the spokesperson.'
        },
        {
          Pregunta:'Fit in',
          Pron:'fɪt ɪn',
          Significado:'Encajar en un grupo',
          EjempIng:'With your attitude, you will never fit in here.'
        },
        {
          Pregunta:'Fix up something',
          Pron:'fɪks ʌp ˈsʌmθɪŋ',
          Significado:'Restaurar/ arreglar algo',
          EjempIng:'I will have to fix up the car.'
        },
        {
          Pregunta:'Flip out',
          Pron:'flɪp aʊt',
          Significado:'Ponerse como loco/perder la cabeza',
          EjempIng:'Suddenly, he flipped out and started screaming.'
        },
        {
          Pregunta:'FLY ABOUT',
          Pron:'',
          Significado:'Volar de un lado a otro',
          EjempIng:''
        },
        {
          Pregunta:'FLY AT',
          Pron:'',
          Significado:'Atacar',
          EjempIng:''
        },
        {
          Pregunta:'FLY AWAY',
          Pron:'',
          Significado:'Huir volando',
          EjempIng:''
        },
        {
          Pregunta:'FLY DOWN',
          Pron:'',
          Significado:'Descender',
          EjempIng:''
        },
        {
          Pregunta:'FLY OFF',
          Pron:'',Significado:'Desprenderse',
          EjempIng:''
        },
        {
          Pregunta:'Fool around',
          Pron:'fuːl əˈraʊnd',
          Significado:'Tontear/estar enrollado con',
          EjempIng:'He is fooling around with almost all the girls in the office.'
        },
        {
          Pregunta:'Freak out',
          Pron:'friːk aʊt',
          Significado:'Cabrearse/asustar',
          EjempIng:'I freaked out when I realized he had lied.'
        },
        {
          Pregunta:'Get   something   back',
          Pron:'ˈɡet ˈsʌmθɪŋ ˈbæk',
          Significado:'Recibir algo que habías prestado',
          EjempIng:'I got my favourite book back.'
        },
        {
          Pregunta:'Get  something across',
          Pron:'ˈɡet ˈsʌmθɪŋ əˈkrɒs',
          Significado:'Comunicarse/transmitir',
          EjempIng:'I tried to get my ideas across but he wouldn’t listen.'
        },
        {
          Pregunta:'GET ABOUT',
          Pron:'',
          Significado:'Ir de acá para allá,  moverse, desplazarse, salir/ viajar/ difundirse.',
          EjempIng:''
        },
        {
          Pregunta:'Get ahead of',
          Pron:'ˈɡet əˈhed ɒv',
          Significado:'Tomar la delantera',
          EjempIng:'The cat was faster and got ahead of the dog.'
        },
        {
          Pregunta:'GET ALONG WITH',
          Pron:'',
          Significado:'Llevarse (bien) con/ marchar, ir con.',
          EjempIng:''
        },
        {
          Pregunta:'Get along/on',
          Pron:'ˈɡet əˈlɒŋ ɒn',
          Significado:'Llevarse bien/congeniar',
          EjempIng:'I get on well with my ex.'
        },
        {
          Pregunta:'GET AROUND',
          Pron:'',
          Significado:'Moverse, desplazarse/ viajar/ difundirse/ evitar, sortear.',
          EjempIng:''
        },
        {
          Pregunta:'GET AROUND TO',
          Pron:'',
          Significado:'Encontrar tiempo para.',
          EjempIng:''
        },
        {
          Pregunta:'GET AT',
          Pron:'',
          Significado:'Dar a entender,  alcanzar, llegar a/ insinuar/ criticar/ meterse con.',
          EjempIng:''
        },
        {
          Pregunta:'Get away with something',
          Pron:'ˈɡet əˈweɪ wɪð ˈsʌmθɪŋ',
          Significado:'Salirse con la suya',
          EjempIng:'The murderer got away with the crime.'
        },
        {
          Pregunta:'Get back',
          Pron:'ˈɡet ˈbæk',
          Significado:'Regresar',
          EjempIng:'We got back from our trip late at night.'
        },
        {
          Pregunta:'GET BEHIND',
          Pron:'',
          Significado:'Atrasarse.',
          EjempIng:''
        },
        {
          Pregunta:'Get by',
          Pron:'ˈɡet baɪ',
          Significado:'Apañárselas/arreglárselas',
          EjempIng:'He manages to get by with his pension.'
        },
        {
          Pregunta:'Get down',
          Pron:'ˈɡet daʊn',
          Significado:'Bajar(se)',
          EjempIng:'Get down from that tree now!'
        },
        {
          Pregunta:'Get in',
          Pron:'ˈɡet ɪn',
          Significado:'Entrar',
          EjempIng:'Get in the car!'
        },
        {
          Pregunta:'GET OFF',
          Pron:'',
          Significado:'Bajarse, apearse, quitarse, terminar, salir, escaparse',
          EjempIng:''
        },
        {
          Pregunta:'GET OFF WITH',
          Pron:'',
          Significado:'Ligar.',
          EjempIng:''
        },
        {
          Pregunta:'Get on something',
          Pron:'ˈɡet ɒn ˈsʌmθɪŋ',
          Significado:'Subirse/montarse en un vehículo',
          EjempIng:'She got on the bus and left.'
        },
        {
          Pregunta:'GET ON FOR',
          Pron:'',
          Significado:'Ser casi.',
          EjempIng:''
        },
        {
          Pregunta:'GET ON TO',
          Pron:'',
          Significado:'Ponerse en contacto con, localizar/ empezar a hablar de, pasar a.',
          EjempIng:''
        },
        {
          Pregunta:'Get out',
          Pron:'ˈɡet aʊt',
          Significado:'Salir (de un lugar)',
          EjempIng:'You should get out more.'
        },
        {
          Pregunta:'Get over something',
          Pron:'ˈɡet ˈəʊvə ˈsʌmθɪŋ',
          Significado:'Superar (enfermedad/situación)',
          EjempIng:'Come on! Stop crying and just get over it!'
        },
        {
          Pregunta:'GET OVER WITH',
          Pron:'',
          Significado:'Acabar con.',
          EjempIng:''
        },
        {
          Pregunta:'GET ROUND',
          Pron:'',
          Significado:'Salvar/ evitar, soslayar/ convencer, persuadir.',
          EjempIng:''
        },
        {
          Pregunta:'GET ROUND TO',
          Pron:'',
          Significado:'Encontrar tiempo para.',
          EjempIng:''
        },
        {
          Pregunta:'GET THROUGH',
          Pron:'',
          Significado:'Abrirse camino, llegar, conseguir hablar.',
          EjempIng:''
        },
        {
          Pregunta:'GET TO',
          Pron:'',
          Significado:'Llegar a, alcanzar',
          EjempIng:''
        },
        {
          Pregunta:'Get together',
          Pron:'ˈɡet təˈɡeðə',
          Significado:'Reunirse/quedar',
          EjempIng:'Let`s get together for a coffee!'
        },
        {
          Pregunta:'Get up',
          Pron:'ˈɡet ʌp',
          Significado:'Levantarse',
          EjempIng:'I hate getting up early.'
        },
        {
          Pregunta:'GET UP TO',
          Pron:'',
          Significado:'Hacer/ llegar a',
          EjempIng:''
        },
        {
          Pregunta:'Give something away',
          Pron:'ɡɪv ˈsʌmθɪŋ əˈweɪ',
          Significado:'Regalar/donar',
          EjempIng:'She gave away most of her shoes.'
        },
        {
          Pregunta:'Give something back',
          Pron:'ɡɪv ˈsʌmθɪŋ ˈbæk',
          Significado:'Devolver',
          EjempIng:'Give me my money back!'
        },
        {
          Pregunta:'GIVE IN',
          Pron:'',
          Significado:'Darse por vencido,-a, rendirse/ceder/entregar.',
          EjempIng:''
        },
        {
          Pregunta:'GIVE IN TO',
          Pron:'',
          Significado:'Ceder ante.',
          EjempIng:''
        },
        {
          Pregunta:'GIVE OFF',
          Pron:'',
          Significado:'Despedir (humo, olor), desprender, emitir',
          EjempIng:''
        },
        {
          Pregunta:'GIVE ONTO',
          Pron:'',
          Significado:'Dar a.',
          EjempIng:''
        },
        {
          Pregunta:'Give something out',
          Pron:'ɡɪv ˈsʌmθɪŋ aʊt',
          Significado:'Repartir',
          EjempIng:'They were giving out drink coupons.'
        },
        {
          Pregunta:'GIVE OVER',
          Pron:'',
          Significado:'Entregar/ dedicar, asignar/ dejar de.',
          EjempIng:''
        },
        {
          Pregunta:'Give something up',
          Pron:'ɡɪv ˈsʌmθɪŋ ʌp',
          Significado:'Abandonar (adicción)',
          EjempIng:'After more than twenty years, he gave up smoking.'
        },
        {
          Pregunta:'Give in',
          Pron:'ɡɪv ɪn',
          Significado:'Rendirse',
          EjempIng:'I don’t know the answer. I give in!'
        },
        {
          Pregunta:'GIVE UP ON',
          Pron:'',
          Significado:'Abandonar, desistir.',
          EjempIng:''
        },
        {
          Pregunta:'GO ABOUT',
          Pron:'',
          Significado:'Ir de un lado para otro,  emprender, hacer/ continuar.',
          EjempIng:''
        },
        {
          Pregunta:'GO ACROSS',
          Pron:'',
          Significado:'Atravesar',
          EjempIng:''
        },
        {
          Pregunta:'Go after someone',
          Pron:'ɡəʊ ˈɑːftə ˈsʌmwʌn',
          Significado:'Seguir/perseguir',
          EjempIng:'The old lady went after the thief.'
        },
        {
          Pregunta:'Go against someone',
          Pron:'ɡəʊ əˈɡenst ˈsʌmwʌn',
          Significado:'Ir en contra',
          EjempIng:'It goes against my principles.'
        },
        {
          Pregunta:'GO AHEAD',
          Pron:'',
          Significado:'Proceder.',
          EjempIng:''
        },
        {
          Pregunta:'GO ALONG',
          Pron:'',
          Significado:'Ir a lo largo de,  pasar por/ progresar, ir.',
          EjempIng:''
        },
        {
          Pregunta:'GO ALONG WITH',
          Pron:'',
          Significado:'Estar de acuerdo con.',
          EjempIng:''
        },
        {
          Pregunta:'GO AROUND',
          Pron:'',
          Significado:'Bastar, ser suficiente, haber/ correr, circular/ ir, andar.',
          EjempIng:''
        },
        {
          Pregunta:'GO AT',
          Pron:'',
          Significado:'Atacar',
          EjempIng:''
        },
        {
          Pregunta:'GO AWAY',
          Pron:'',
          Significado:'Marcharse',
          EjempIng:''
        },
        {
          Pregunta:'Go back',
          Pron:'ɡəʊ ˈbæk',
          Significado:'Regresar',
          EjempIng:'I went back home for Christmas. '
        },
        {
          Pregunta:'GO BACK ON',
          Pron:'',
          Significado:'Romper, no cumplir.',
          EjempIng:''}
          ,
        {
          Pregunta:'GO BY',
          Pron:'',
          Significado:'Pasar/ atenerse a, seguir/ dejarse llevar por/ juzgar por.',
          EjempIng:''
        },
        {
          Pregunta:'Go down',
          Pron:'ɡəʊ daʊn',
          Significado:'Disminuir',
          EjempIng:'The temperature is going down.'
        },
        {
          Pregunta:'GO DOWN WITH',
          Pron:'',
          Significado:'Coger, pillar.',
          EjempIng:''
        },
        {
          Pregunta:'GO FOR',
          Pron:'',
          Significado:'Atacar/ ir a buscar/ gustar/ valer para.',
          EjempIng:''
        },
        {
          Pregunta:'GO IN',
          Pron:'',
          Significado:'Entrar.',
          EjempIng:''
        },
        {
          Pregunta:'GO IN / INTO',
          Pron:'',
          Significado:'Entrar',
          EjempIng:''
        },
        {
          Pregunta:'GO IN FOR',
          Pron:'',
          Significado:'Participar en, tomar parte en/ presentarse a/ dedicarse a.',
          EjempIng:''
        },
        {
          Pregunta:'GO INTO',
          Pron:'',
          Significado:'Entrar en/ investigar/ chocar contra.',
          EjempIng:''
        },
        {
          Pregunta:'GO OFF',
          Pron:'',
          Significado:'Marcharse/ estallar, explotar/ sonar/ dispararse/ estropearse, pasarse.',
          EjempIng:''
        },
        {
          Pregunta:'GO OFF WITH',
          Pron:'',
          Significado:'Escaparse con.',
          EjempIng:''
        },
        {
          Pregunta:'GO ON',
          Pron:'',
          Significado:'Seguir, continuar/ pasar, ocurrir.',
          EjempIng:''
        },
        {
          Pregunta:'Go out',
          Pron:'ɡəʊ aʊt',
          Significado:'Salir',
          EjempIng:'We`re going out tonight.'
        },
        {
          Pregunta:'Go out with   someone',
          Pron:'ɡəʊ aʊt wɪð ˈsʌmwʌn',
          Significado:'Tener una cita',
          EjempIng:'I’m going out with someone special.'
        },
        {
          Pregunta:'Go over   something',
          Pron:'ɡəʊ ˈəʊvə ˈsʌmθɪŋ',
          Significado:'Revisar',
          EjempIng:'Please  go over  your homework and look for the mistakes.'
        },
        {
          Pregunta:'GO OVER TO',
          Pron:'',
          Significado:'Pasarse a/ cambiar a, pasar a.',
          EjempIng:''
        },
        {
          Pregunta:'GO ROUND',
          Pron:'',
          Significado:'Dar vueltas, girar/ pasar por casa de, visitar.',
          EjempIng:''
        },
        {
          Pregunta:'GO THROUGH',
          Pron:'',
          Significado:'Penetrar, sufrir, padecer/ examinar.',
          EjempIng:''
        },
        {
          Pregunta:'GO THROUGH WITH',
          Pron:'',
          Significado:'Llevar a cabo.',
          EjempIng:''
        },
        {
          Pregunta:'GO TOWARDS',
          Pron:'',
          Significado:'Destinar a, reservar para.',
          EjempIng:''
        },
        {
          Pregunta:'GO UNDER',
          Pron:'',
          Significado:'Hundirse/ fracasar.',
          EjempIng:''
        },
        {
          Pregunta:'GO UP',
          Pron:'',
          Significado:'Subir/ acercarse/ levantarse/ estallar.',
          EjempIng:''
        },
        {
          Pregunta:'GO UP TO',
          Pron:'',
          Significado:'Acercarse a',
          EjempIng:''
        },
        {
          Pregunta:'GO WITH',
          Pron:'',
          Significado:'Acompañar/ ir con, estar incluido,-a/ hacer juego con.',
          EjempIng:''
        },
        {
          Pregunta:'GO WITHOUT',
          Pron:'',
          Significado:'Pasarse sin, prescindir de',
          EjempIng:''
        },
        {
          Pregunta:'Grow apart',
          Pron:'ɡrəʊ əˈpɑːt',
          Significado:'Distanciarse sentimentalmente',
          EjempIng:'When I went abroad, my best friend and I grew apart.'
        },
        {
          Pregunta:'GROW AWAY FROM',
          Pron:'',
          Significado:'Distanciarse de.',
          EjempIng:''
        },
        {
          Pregunta:'GROW INTO',
          Pron:'',
          Significado:'Convertirse en, hacerse.',
          EjempIng:''
        },
        {
          Pregunta:'GROW ON',
          Pron:'',
          Significado:'Llegar a gustar.',
          EjempIng:''
        },
        {
          Pregunta:'GROW OUT OF',
          Pron:'',
          Significado:'Perder, quitarse/ quedarle pequeño,-a a.',
          EjempIng:''
        },
        {
          Pregunta:'Grow up',
          Pron:'ɡrəʊ ʌp',
          Significado:'Crecer/hacerse mayor',
          EjempIng:'When I grow up I want to be a vet.'
        },
        {
          Pregunta:'HAND AROUND',
          Pron:'',
          Significado:'Repartir, ofrecer, pasar.',
          EjempIng:''
        },
        {
          Pregunta:'Hand something back',
          Pron:'hænd ˈsʌmθɪŋ ˈbæk',
          Significado:'Devolver',
          EjempIng:'I handed the CD back to my sister.'
        },
        {
          Pregunta:'HAND DOWN',
          Pron:'',
          Significado:'Transmitir/ pasar/ dejar en herencia.',
          EjempIng:''
        },
        {
          Pregunta:'Hand something in',
          Pron:'hænd ˈsʌmθɪŋ ɪn',
          Significado:'Entregar',
          EjempIng:'The students handed the homework in to their teacher.'
        },
        {
          Pregunta:'HAND ON',
          Pron:'',
          Significado:'Transmitir, heredar: (give) pasar, dar.',
          EjempIng:''
        },
        {
          Pregunta:'Hand something out',
          Pron:'hænd ˈsʌmθɪŋ aʊt',
          Significado:'Repartir',
          EjempIng:'Volunteers were handing out food and clothes after the flood.'
        },
        {
          Pregunta:'HAND OVER',
          Pron:'',
          Significado:'Entregar/ ceder.',
          EjempIng:''
        },
        {
          Pregunta:'HAND ROUND',
          Pron:'',
          Significado:'Hacer circular',
          EjempIng:''
        },
        {
          Pregunta:'HANG ABOUT',
          Pron:'',
          Significado:'Vagar',
          EjempIng:''
        },
        {
          Pregunta:'HANG AROUND',
          Pron:'',
          Significado:'Esperar/ perder el tiempo/ frecuentar.',
          EjempIng:''
        },
        {
          Pregunta:'HANG BACK',
          Pron:'',
          Significado:'Retraerse,  quedarse atrás/ vacilar.',
          EjempIng:''
        },
        {
          Pregunta:'HANG BEHIND',
          Pron:'',
          Significado:'Quedarse atrás',
          EjempIng:''
        },
        {
          Pregunta:'HANG DOWN',
          Pron:'',
          Significado:'Colgar, caer.',
          EjempIng:''
        },
        {
          Pregunta:'HANG FROM',
          Pron:'',
          Significado:'Colgar de.',
          EjempIng:''
        },
        {
          Pregunta:'HANG OFF',
          Pron:'',
          Significado:'Colgar (el teléfono).',
          EjempIng:''
        },
        {
          Pregunta:'Hang on',
          Pron:'hæŋ ɒn',
          Significado:'Esperar/mantener a la espera',
          EjempIng:'Hang on please, I’ll put you through.'
        },
        {
          Pregunta:'Hang out',
          Pron:'hæŋ aʊt',
          Significado:'Pasar el rato',
          EjempIng:'He hangs out in the park for hours.'
        },
        {
          Pregunta:'Hang up',
          Pron:'hæŋ ʌp',
          Significado:'Colgar (teléfono)',
          EjempIng:'He hung up in the middle of the conversation.'
        },
        {
          Pregunta:'HAVE ON',
          Pron:'',
          Significado:'Llevar puesto,-a/ tomar el pelo a.',
          EjempIng:''
        },
        {
          Pregunta:'HAVE OUT',
          Pron:'',
          Significado:'Sacarse/ operarse de.',
          EjempIng:''
        },
        {
          Pregunta:'Head for',
          Pron:'hed fɔː',
          Significado:'Dirigirse a',
          EjempIng:'I head for work at 6.30 every morning.'
        },
        {
          Pregunta:'HEAP UP',
          Pron:'',
          Significado:'Conseguir gran cantidad de algo',
          EjempIng:''
        },
        {
          Pregunta:'Hear about',
          Pron:'hɪər əˈbaʊt',
          Significado:'Enterarse/conocer',
          EjempIng:'How did you hear about us?'
        },
        {
          Pregunta:'HEAR FROM',
          Pron:'',
          Significado:'Tener noticias de alguien',
          EjempIng:''
        },
        {
          Pregunta:'HEAR OF',
          Pron:'',
          Significado:'Permitir algo',
          EjempIng:''
        },
        {
          Pregunta:'HEAR OUT',
          Pron:'',
          Significado:'Escuchar a alguien hasta que haya terminado.',
          EjempIng:''
        },
        {
          Pregunta:'HELP ON',
          Pron:'',
          Significado:'Estimular, ayudar a alguien a ponerse algo',
          EjempIng:''
        },
        {
          Pregunta:'HELP OUT',
          Pron:'',
          Significado:'Ayudar a alguien.',
          EjempIng:''
        },
        {
          Pregunta:'Hide away',
          Pron:'haɪd əˈweɪ',
          Significado:'Esconder, ocultar',
          EjempIng:'The murderer hid away the gun.'
        },
        {
          Pregunta:'HINGE ON',
          Pron:'',
          Significado:'Depender de.',
          EjempIng:''
        },
        {
          Pregunta:'HIT OFF',
          Pron:'',
          Significado:'Imitar',
          EjempIng:''
        },
        {
          Pregunta:'HIT ON',
          Pron:'',
          Significado:'Descubrir por accidente',
          EjempIng:''
        },
        {
          Pregunta:'HOLD AGAINST',
          Pron:'',
          Significado:'Culpar de algo',
          EjempIng:''
        },
        {
          Pregunta:'HOLD DOWN',
          Pron:'',
          Significado:'Dominar/ desempeñar.',
          EjempIng:''
        },
        {
          Pregunta:'HOLD FORTH',
          Pron:'',
          Significado:'Hablar largo y tendido (on/about, sobre).',
          EjempIng:''
        },
        {
          Pregunta:'HOLD OFF',
          Pron:'',
          Significado:'Mantener alejado,-a/ refrenarse.',
          EjempIng:''
        },
        {
          Pregunta:'Hold on',
          Pron:'həʊld ɒn',
          Significado:'Mantenerse a la espera',
          EjempIng:'Please hold on, I’ll put you through.'
        },
        {
          Pregunta:'Hold something back',
          Pron:'həʊld ˈsʌmθɪŋ ˈbæk',
          Significado:'Contener (emoción)',
          EjempIng:'He held back his anger.'
        },
        {
          Pregunta:'HOLD ON TO',
          Pron:'',
          Significado:'Cogerse a, agarrarse a/ guardar.',
          EjempIng:''
        },
        {
          Pregunta:'HOLD OUT',
          Pron:'',
          Significado:'Resistir, tender, ofrecer/ durar.',
          EjempIng:''
        },
        {
          Pregunta:'HOLD OVER',
          Pron:'',
          Significado:'Aplazar.',
          EjempIng:''
        },
        {
          Pregunta:'HOLD UP',
          Pron:'',
          Significado:'Mantener en alto,  aguantar, sostener, resistir.',
          EjempIng:''
        },
        {
          Pregunta:'HOLD WITH',
          Pron:'',
          Significado:'Estar de acuerdo con.',
          EjempIng:''
        },
        {
          Pregunta:'HURRY ALONG',
          Pron:'',
          Significado:'Darse prisa',
          EjempIng:''
        },
        {
          Pregunta:'HURRY AWAY',
          Pron:'',
          Significado:'Irse rápidamente',
          EjempIng:''
        },
        {
          Pregunta:'HURRY OFF',
          Pron:'',
          Significado:'Irse rápidamente',
          EjempIng:''
        },
        {
          Pregunta:'HURRY UP',
          Pron:'',
          Significado:'Darse prisa, correr',
          EjempIng:''
        },
        {
          Pregunta:'IRON OUT',
          Pron:'',
          Significado:'Planchar/ resolver, solucionar.',
          EjempIng:''
        },
        {
          Pregunta:'JACK IN',
          Pron:'',
          Significado:'Dejar, colgar.',
          EjempIng:''
        },
        {
          Pregunta:'JACK OFF',
          Pron:'',
          Significado:'Meneársela/ masturbar.',
          EjempIng:''
        },
        {
          Pregunta:'JACK UP',
          Pron:'',
          Significado:'Levantar con gato/ subir.',
          EjempIng:''
        },
        {
          Pregunta:'Joke around',
          Pron:'dʒəʊk əˈraʊnd',
          Significado:'Hacer gracias/bromear',
          EjempIng:'She was always joking around.'
        },
        {
          Pregunta:'JUMP ABOUT',
          Pron:'',
          Significado:'Dar saltos',
          EjempIng:''
        },
        {
          Pregunta:'JUMP AT',
          Pron:'',
          Significado:'Atacar,  aceptar sin pensarlo.',
          EjempIng:''
        },
        {
          Pregunta:'JUMP DOWN',
          Pron:'',
          Significado:'Bajar de un salto',
          EjempIng:''
        },
        {
          Pregunta:'Jump in',
          Pron:'dʒʌmp ɪn',
          Significado:'Meterse en (conversación)',
          EjempIng:'He jumped in the discussion and gave his point of view.'
        },
        {
          Pregunta:'JUMP ON',
          Pron:'',
          Significado:'Subir de un salto',
          EjempIng:''
        },
        {
          Pregunta:'JUMP OVER',
          Pron:'',
          Significado:'Saltar por encima de',
          EjempIng:''
        },
        {
          Pregunta:'KEEP AT',
          Pron:'',
          Significado:'Perseverar en algo/ no dejar en paz, machacar.',
          EjempIng:''
        },
        {
          Pregunta:'Keep away',
          Pron:'kiːp əˈweɪ',
          Significado:'No acercarse/Mantener fuera del alcance',
          EjempIng:'I keep away from people who are ill.'
        },
        {
          Pregunta:'KEEP BACK',
          Pron:'',
          Significado:'Mantenerse separado, retener, guardar/ ocultar, no revelar/ estorbar, impedir/ mantener atrás.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP DOWN',
          Pron:'',
          Significado:'Controlar, oprimir, sujetar/ mantener bajo/ limitar.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP FROM',
          Pron:'',
          Significado:'Abstenerse de, guardarse de.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP IN',
          Pron:'',
          Significado:'No dejar salir/ hacer quedar/ contener/ costear, pagar.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP IN WITH',
          Pron:'',
          Significado:'Mantener buenas relaciones con.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP OFF',
          Pron:'',
          Significado:'Abstenerse, mantenerse a distancia/ no llover/ no dejar entrar/ no tocar, no hablar de.',
          EjempIng:''
        },
        {
          Pregunta:'Keep on doing something',
          Pron:'kiːp ɒn ˈduːɪŋ ˈsʌmθɪŋ',
          Significado:'Seguir haciendo algo',
          EjempIng:'Keep on walking, we are almost there.'
        },
        {
          Pregunta:'KEEP ON ABOUT',
          Pron:'',
          Significado:'Insistir en, no parar de hablar de.',
          EjempIng:''
        },
        {
          Pregunta:'Keep someone/something out',
          Pron:'kiːp ˈsʌmwʌn ˈsʌmθɪŋ aʊt',
          Significado:'No pasar',
          EjempIng:'Keep out of that room.'
        },
        {
          Pregunta:'KEEP OUT OF',
          Pron:'',
          Significado:'No entrar en/ no meterse en.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP TO',
          Pron:'',
          Significado
          :'Atenerse a, cumplir/ no dejar, no salir de.',
          EjempIng:''},
        {
          Pregunta:'KEEP TOGETHER',
          Pron:'',
          Significado:'Mantenerse juntos,-as, no separarse.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP UNDER',
          Pron:'',
          Significado:'Tener subyugado.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP UP',
          Pron:'',
          Significado:'Mantenerse de pie, resistir, seguir/ mantener despierto/ aguantar el ritmo/ mantenerse al día.',
          EjempIng:''
        },
        {
          Pregunta:'KEEP UP WITH',
          Pron:'',
          Significado:'Seguir/ mantenerse al corriente de/ mantener el contacto con.',
          EjempIng:''
        },
        {
          Pregunta:'KICK AGAINST SOMETHING',
          Pron:'',
          Significado:'Protestar contra, reaccionar contra.',
          EjempIng:''
        },
        {
          Pregunta:'KICK AROUND',
          Pron:'',
          Significado:'Andar por ahí/ dar vueltas a.',
          EjempIng:''
        },
        {
          Pregunta:'KICK IN',
          Pron:'',
          Significado:'Romper a patadas.',
          EjempIng:''
        },
        {
          Pregunta:'KICK OFF',
          Pron:'',
          Significado:'Sacar, hacer el saque inicial/ empezar, comenzar/ empezar, comenzar, iniciar/ quitarse.',
          EjempIng:''
        },
        {
          Pregunta:'KICK OUT',
          Pron:'',
          Significado:'Echar a uno.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK ABOUT',
          Pron:'',
          Significado:'Golpear acá y allá,  rodar, recorrer/ andar con/ pegar, maltratar.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK AT',
          Pron:'',
          Significado:'Llamar (a la puerta)',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK BACK',
          Pron:'',
          Significado:'Beberse de un trago, rápidamente o en grandes cantidades.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK DOWN',
          Pron:'',
          Significado:'Derribar/ atropellar/ derribar/ rebajar/ adjudicar.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK OFF',
          Pron:'',
          Significado:'Tirar, hacer caer/ birlar/liquidar/ descontar/ quitar.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK OUT',
          Pron:'',
          Significado:'Dejar sin conocimiento/ poner fuera de combate',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK OVER',
          Pron:'',
          Significado:'Volcar, tirar/ atropellar.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK TOGETHER',
          Pron:'',
          Significado:'Hacer de prisa, hacer rápidamente/ entrechocarse.',
          EjempIng:''
        },
        {
          Pregunta:'KNOCK UP',
          Pron:'',
          Significado:'Despertar, llamar/ hacer de prisa, preparar/ dejar embarazada.',
          EjempIng:''
        },
        {
          Pregunta:'LAY ABOUT',
          Pron:'',
          Significado:'Agredir.',
          EjempIng:''
        },
        {
          Pregunta:'LAY ASIDE',
          Pron:'',
          Significado:'Dejar a un lado/ dejar de lado.',
          EjempIng:''
        },
        {
          Pregunta:'LAY BEFORE',
          Pron:'',
          Significado:'Presentar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY BY',
          Pron:'',
          Significado:'Guarder/ ahorrar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY DOWN',
          Pron:'',
          Significado:'Dejar, soltar/ entregar/ imponer, fijar/ sentar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY IN',
          Pron:'',
          Significado:'Proveerse de.',
          EjempIng:''
        },
        {
          Pregunta:'LAY INTO',
          Pron:'',
          Significado:'Atacar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY OFF',
          Pron:'',
          Significado:'Despedir/ dejar en paz, dejar de molestar/ parar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY ON',
          Pron:'',
          Significado:'Facilitar, suministrar/ cargar.',
          EjempIng:''
        },
        {
          Pregunta:'LAY OUT',
          Pron:'',
          Significado:'Tender, extender/ disponer, colocar/ presentar, exponer.',
          EjempIng:''
        },
        {
          Pregunta:'LAY OVER',
          Pron:'',
          Significado:'Hacer una parada.',
          EjempIng:''
        },
        {
          Pregunta:'LAY UP',
          Pron:'',
          Significado:'Almacenar.',
          EjempIng:''
        },
        {
          Pregunta:'LEAVE OFF',
          Pron:'',
          Significado:'Dejar de/ acabar, terminar.',
          EjempIng:''
        },
        {
          Pregunta:'Leave out',
          Pron:'liːv aʊt',
          Significado:'No incluir/dejar fuera',
          EjempIng:'I was left out by my friends.'
        },
        {
          Pregunta:'Let someone down',
          Pron:'let ˈsʌmwʌn daʊn',
          Significado:'Decepcionar/fallar (a alguien)',
          EjempIng:'I needed your support but you let me down.'
        },
        {
          Pregunta:'Let someone in',
          Pron:'let ˈsʌmwʌn ɪn',
          Significado:'Permitir la entrada',
          EjempIng:'It’s raining! Can I  let  the dog  in ?'
        },
        {
          Pregunta:'LET INTO',
          Pron:'',
          Significado:'Dejar entrar / incrustar en/ revelar.',
          EjempIng:''
        },
        {
          Pregunta:'LET OFF',
          Pron:'',
          Significado:'Dejar/ hacer explotar/ hacer estallar/ perdonar/ dejar marcharse/ dejar en libertad.',
          EjempIng:''
        },
        {
          Pregunta:'LET ON',
          Pron:'',
          Significado:'Decir, descubrir/ hacer ver.',
          EjempIng:''
        },
        {
          Pregunta:'LET OUT',
          Pron:'',
          Significado:'Dejar salir/ soltar (from, de)/ alquilar.',
          EjempIng:''
        },
        {
          Pregunta:'LET THROUGH',
          Pron:'',
          Significado:'Dejar pasar.',
          EjempIng:''
        },
        {
          Pregunta:'LET UP',
          Pron:'',
          Significado:'Parar.',
          EjempIng:''
        },
        {
          Pregunta:'LET UP ON',
          Pron:'',
          Significado:'Dejar en paz.',
          EjempIng:''
        },
        {
          Pregunta:'Log in  ',
          Pron:'lɒɡ ɪn',
          Significado:'Iniciar sesión (a una página web)',
          jempIng:'I can`t log in because I haven`t registered yet.'
        },
        {
          Pregunta:'Log out  ',
          Pron:'lɒɡ aʊt',
          Significado:'Cerrar sesión (a una página web)',
          EjempIng:'Remember to log out just.'
        },
        {
          Pregunta:'Look after someone/something',
          Pron:'lʊk ˈɑːftə ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Cuidar de',
          EjempIng:'I have to look after my little brother this weekend.'
        },
        {
          Pregunta:'LOOK AHEAD',
          Pron:'',
          Significado:'Mirar hacia adelante.',
          EjempIng:''
        },
        {
          Pregunta:'LOOK AT',
          Pron:'',
          Significado:'Mirar, considerar.',
          EjempIng:''
        },
        {
          Pregunta:'Look back',
          Pron:'lʊk ˈbæk',
          Significado:'Echar la vista atrás (al pasado)',
          EjempIng:'Don’t look back with regret, look forward with hope.'
        },
        {
          Pregunta:'LOOK BEHIND',
          Pron:'',
          Significado:'Mirar atrás.',
          EjempIng:''
        },
        {
          Pregunta:'Look down on someone',
          Pron:'lʊk daʊn ɒn ˈsʌmwʌn',
          Significado:'Menospreciar',
          EjempIng:'Don’t look back on me!'
        },
        {
          Pregunta:'Look for someone/something',
          Pron:'lʊk fə ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Buscar',
          EjempIng:'I`m looking for Peter. Have you seen him?'
        },
        {
          Pregunta:'Look forward to something',
          Pron:'lʊk ˈfɔːwəd tə ˈsʌmθɪŋ',
          Significado:'Desear/anhelar (que suceda algo)',
          EjempIng:'I`m looking forward to summer time.'
        },
        {
          Pregunta:'LOOK IN',
          Pron:'',
          Significado:'Mirar dentro',
          EjempIng:''
        },
        {
          Pregunta:'LOOK IN ON',
          Pron:'',
          Significado:'Pasar (un momento) por.',
          EjempIng:''
        },
        {
          Pregunta:'LOOK INTO',
          Pron:'',
          Significado:'Investigar.',
          EjempIng:''
        },
        {
          Pregunta:'LOOK LIKE',
          Pron:'',
          Significado:'Parecer -se',
          EjempIng:''
        },
        {
          Pregunta:'LOOK ON',
          Pron:'',
          Significado:'Considerer/observar.',
          EjempIng:''
        },
        {
          Pregunta:'LOOK ONTO',
          Pron:'',
          Significado:'Dar a.',
          EjempIng:''
        },
        {
          Pregunta:'Look out',
          Pron:'lʊk aʊt',
          Significado:'Tener cuidado/estar atento',
          EjempIng:'Look out for pedestrians!'
        },
        {
          Pregunta:'LOOK OUT FOR',
          Pron:'',
          Significado:'Esperar, estar al tanto, tener cuidado',
          EjempIng:''
        },
        {
          Pregunta:'Look something over',
          Pron:'lʊk ˈsʌmθɪŋ ˈəʊvə',
          Significado:'Revisar',
          EjempIng:'You should look over your writing before you hand it in to the teacher.'
        },
        {
          Pregunta:'LOOK ROUND',
          Pron:'',
          Significado:'Mirar alrededor, volver la cabeza, mirar, visitar',
          EjempIng:''
        },
        {
          Pregunta:'LOOK THROUGH',
          Pron:'',
          Significado:'Revisar/ ojear.',
          EjempIng:''
        },
        {
          Pregunta:'LOOK TO',
          Pron:'',
          Significado:'Contar con/ centrarse en.',
          EjempIng:''
        },
        {
          Pregunta:'Look something up',
          Pron:'lʊk ˈsʌmθɪŋ ʌp',
          Significado:'Buscar información/hacer una consulta',
          EjempIng:'I didn’t know that word in English so I looked it up in the dictionary.'
        },
        {
          Pregunta:'Look up to someone',
          Pron:'lʊk ʌp tə ˈsʌmwʌn',
          Significado:'Mostrar respeto por/admirar',
          EjempIng:'People should  look up  to their parents.'
        },
        {
          Pregunta:'MAKE AFTER',
          Pron:'',
          Significado:'Seguir a, perseguir a.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE FOR',
          Pron:'',
          Significado:'Dirigirse hacia/ abalanzarse sobre/ contribuir a, crear, conducir a.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE INTO',
          Pron:'',
          Significado:'Convertir en, transformar en.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE OF',
          Pron:'',
          Significado:'Pensar, opinar, parecer/ entender/ dar importancia a.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE OFF',
          Pron:'',
          Significado:'Escaparse, largarse, huir.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE OFF WITH / MAKE AWAY WITH',
          Pron:'',
          Significado:'Llevarse, escaparse con.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE OUT',
          Pron:'',
          Significado:'Hacer/ extender, hacer/ entender, comprender/ pretender.',
          EjempIng:''
        },
        {
          Pregunta:'MAKE OVER',
          Pron:'',
          Significado:'Ceder, transferir, traspasar/convertir, transformar.',
          EjempIng:''
        },
        {
          Pregunta:'Make someone up',
          Pron:'ˈmeɪk ˈsʌmwʌn ʌp',
          Significado:'Maquillar/maquillarse',
          EjempIng:'When I was a teenager I loved making up for parties. '
        },
        {
          Pregunta:'Make something up',
          Pron:'ˈmeɪk ˈsʌmθɪŋ ʌp',
          Significado:'Inventarse algo',
          EjempIng:'He is always making up crazy stories about his past.'
        },
        {
          Pregunta:'Make up',
          Pron:'ˈmeɪk ʌp',
          Significado:'Hacer las paces',
          EjempIng:'My friend and I were angry but we made up.'
        },
        {
          Pregunta:'MAKE WITH',
          Pron:'',
          Significado:'Dar, traer.',
          EjempIng:''
        },
        {
          Pregunta:'MARK DOWN',
          Pron:'',
          Significado:'Rebajar el precio de/ bajar la nota de/ apuntar.',
          EjempIng:''
        },
        {
          Pregunta:'MARK OFF',
          Pron:'',
          Significado:'Separar, dividir, distinguir/ delimiter/ tachar.',
          EjempIng:''
        },
        {
          Pregunta:'MARK OUT',
          Pron:'',
          Significado:'Marcar, delimiter/ marcar, trazar/ señalar, seleccionar.',
          EjempIng:''
        },
        {
          Pregunta:'MARK UP',
          Pron:'',
          Significado:'Subir (el precio de), aumentar (el precio de)/ subir la nota de.',
          EjempIng:''
        },
        {
          Pregunta:'Mix something up',
          Pron:'mɪks ˈsʌmθɪŋ ʌp',
          Significado:'Confundir algo',
          EjempIng:'The new teacher kept mixing up our names.'
        },
        {
          Pregunta:'MOVE ALONG',
          Pron:'',
          Significado:'Pasar, no detenerse',
          EjempIng:''
        },
        {
          Pregunta:'MOVE AWAY',
          Pron:'',
          Significado:'Alejarse',
          EjempIng:''
        },
        {
          Pregunta:'MOVE DOWN',
          Pron:'',
          Significado:'Bajar',
          EjempIng:''
        },
        {
          Pregunta:'MOVE IN',
          Pron:'',
          Significado:'Mudarse (de domicilio)',
          EjempIng:''
        },
        {
          Pregunta:'MOVE OFF',
          Pron:'',
          Significado:'Marcharse',
          EjempIng:''
        },
        {
          Pregunta:'MOVE ON',
          Pron:'',
          Significado:'No detenerse, pasar a (otro asunto)',
          EjempIng:''
        },
        {
          Pregunta:'MOVE OUT',
          Pron:'',
          Significado:'Mudarse (de domicilio)',
          EjempIng:''
        },
        {
          Pregunta:'MOVE UP',
          Pron:'',
          Significado:'Moverse (para dejar sitio)',
          EjempIng:''
        },
        {
          Pregunta:'NOD OFF',
          Pron:'',
          Significado:'Dormirse, dar cabezadas.',
          EjempIng:''
        },
        {
          Pregunta:'PAN OUT',
          Pron:'',
          Significado:'Salir, resultar.',
          EjempIng:''
        },
        {
          Pregunta:'Pass away',
          Pron:'pɑːs əˈweɪ',
          Significado:'Fallecer/morir',
          EjempIng:'My grandmother  passed away  last year.'
        },
        {
          Pregunta:'PASS BY',
          Pron:'',
          Significado:'Pasar por (un sitio), pasar de largo.',
          EjempIng:''
        },
        {
          Pregunta:'PASS DOWN',
          Pron:'',
          Significado:'Pasar/ transmitir.',
          EjempIng:''
        },
        {
          Pregunta:'PASS FOR',
          Pron:'',
          Significado:'Pasar por.',
          EjempIng:''
        },
        {
          Pregunta:'PASS IN',
          Pron:'',
          Significado:'Entrar',
          EjempIng:''
        },
        {
          Pregunta:'PASS OFF',
          Pron:'',
          Significado:'Pasar, transcurrir/ parar/ pasarse/ hacer pasar.',
          EjempIng:''
        },
        {
          Pregunta:'PASS ON',
          Pron:'',
          Significado:'Pasar (de mano en mano), dar/ contagiar/ pasar a mejor vida.',
          EjempIng:''
        },
        {
          Pregunta:'Pass out',
          Pron:'pɑːs aʊt',
          Significado:'Desmayarse',
          EjempIng:'It was so hot in the room that I was about to pass out.'
        },
        {
          Pregunta:'PASS OVER',
          Pron:'',
          Significado:'Pasar por alto, dejar de lado, olvidar/ atravesar, cruzar.',
          EjempIng:''
        },
        {
          Pregunta:'PASS THROUGH',
          Pron:'',
          Significado:'Estar de paso/ pasar por, atravesar.',
          EjempIng:''
        },
        {
          Pregunta:'Pass something up',
          Pron:'pɑːs ˈsʌmθɪŋ ʌp',
          Significado:'Dejar pasar (algo positivo)',
          EjempIng:'You passed up that opportunity because you weren’t self-confident enough.'
        },
        {
          Pregunta:'Pay someone back',
          Pron:'peɪ ˈsʌmwʌn ˈbæk',
          Significado:'Devolver el dinero (que se le debe a alguien)',
          EjempIng:'Can you lend me some money, please? I`ll pay you back tomorrow.'
        },
        {
          Pregunta:'PAY FOR',
          Pron:'',
          Significado:'Pagar',
          EjempIng:''
        },
        {
          Pregunta:'PAY IN',
          Pron:'',
          Significado:'Ingresar (dinero)',
          EjempIng:''
        },
        {
          Pregunta:'PAY OFF',
          Pron:'',
          Significado:'Liquidar (una cuenta), pagar',
          EjempIng:''
        },
        {
          Pregunta:'PAY UP',
          Pron:'',
          Significado:'Pagar (una deuda)',
          EjempIng:''
        },
        {
          Pregunta:'Pick at',
          Pron:'pɪk æt',
          Significado:'Molestar con críticas/meterse con alguien',
          EjempIng:'My parents were always picking at me because of my clothes.'
        },
        {
          Pregunta:'Pick something out',
          Pron:'pɪk ˈsʌmθɪŋ aʊt',
          Significado:'Elegir',
          EjempIng:'Pick out one skirt you like and I’ll buy it for you.'
        },
        {
          Pregunta:'PICK OFF',
          Pron:'',
          Significado:'Matar uno a uno.',
          EjempIng:''
        },
        {
          Pregunta:'PICK ON',
          Pron:'',
          Significado:'Meterse con/ elegir, escoger.',
          EjempIng:''
        },
        {
          Pregunta:'Pick up',
          Pron:'pɪk ʌp',
          Significado:'Recoger (a alguien)',
          EjempIng:'I have to pick up the kids at 5 o´clock.'
        },
        {
          Pregunta:'PICK OUT',
          Pron:'',
          Significado:'Elegir, escoger/ distinguir/ reconocer/ tocar de oído.',
          EjempIng:''
        },
        {
          Pregunta:'PICK UP',
          Pron:'',
          Significado:'Mejorar, ligar, recoger, aprender, levantar',
          EjempIng:''
        },
        {
          Pregunta:'PICK UP ON',
          Pron:'',
          Significado:'Hacer reseña de/ volver a/ señalar.',
          EjempIng:''
        },
        {
          Pregunta:'Pig out',
          Pron:'pɪɡ aʊt',
          Significado:'Comer demasiado',
          EjempIng:'At Christmas is the time when people pig out before their New Year’s resolutions.'
        },
        {
          Pregunta:'PITCH (UP) ON',
          Pron:'',
          Significado:'Elegir, escoger/ encontrar, dar con.',
          EjempIng:''
        },
        {
          Pregunta:'PITCH FORWARD',
          Pron:'',
          Significado:'Caer de bruces, caer de cabeza.',
          EjempIng:''
        },
        {
          Pregunta:'PITCH IN',
          Pron:'',
          Significado:'Empezar/empezar a comer/ cooperar/ contribuir.',
          EjempIng:''
        },
        {
          Pregunta:'PITCH INTO',
          Pron:'',
          Significado:'Emprender enérgicamente algo/ atacar, arremeter contra.',
          EjempIng:''
        },
        {
          Pregunta:'PITCH OFF',
          Pron:'',
          Significado:'Quitar de encima, sacudir/ caer.',
          EjempIng:''
        },
        {
          Pregunta:'PITCH OUT',
          Pron:'',
          Significado
          :'Tirar/ echar, expulsar, poner de patitas en la calle.',
          EjempIng:''},
        {
          Pregunta:'PITCH OVER',
          Pron:'',
          Significado
          :'Tirar/ volcarse.',
          EjempIng:''},
        {
          Pregunta:'POINT AT',
          Pron:'',
          Significado:'Señalar',
          EjempIng:''
        },
        {
          Pregunta:'POINT AWAY',
          Pron:'',
          Significado:'Señalar a lo lejos',
          EjempIng:''
        },
        {
          Pregunta:'POINT DOWN',
          Pron:'',
          Significado:'Señalar abajo',
          EjempIng:''
        },
        {
          Pregunta:'Point someone/something out',
          Pron:'pɔɪnt ˈsʌmwʌn ˈsʌmθɪŋ aʊt',
          Significado:'Señalar algo',
          EjempIng:'Stop pointing out my mistakes!'
        },
        {
          Pregunta:'POINT TO',
          Pron:'',
          Significado:'Señalar',
          EjempIng:''
        },
        {
          Pregunta:'POINT UP',
          Pron:'',
          Significado:'Señalar arriba',
          EjempIng:''
        },
        {
          Pregunta:'PULL ABOUT',
          Pron:'',
          Significado:'Manosear, estropear.',
          EjempIng:''
        },
        {
          Pregunta:'PULL ALONG',
          Pron:'',
          Significado:'Arrastrar/arrastrarse.',
          EjempIng:''
        },
        {
          Pregunta:'PULL APART',
          Pron:'',
          Significado:'Romper, partir en dos/ desmontar/ criticar duramente.',
          EjempIng:''
        },
        {
          Pregunta:'PULL AWAY',
          Pron:'',Significado:'Arrancar/ quitar arrancando/ apartarse bruscamente de uno.',
          EjempIng:''
        },
        {

          Pregunta:'PULL BACK',
          Pron:'',
          Significado:'Retirar/ retener, tirar hacia atrás/ tirar hacia sí.',
          EjempIng:''
        },
        {
          Pregunta:'PULL DOWN',
          Pron:'',
          Significado:'Derribar, bajar, tirar hacia abajo, rebajar, hacer caer, tumbar.',
          EjempIng:''
        },
        {
          Pregunta:'PULL IN',
          Pron:'',
          Significado:'Tirar hacia sí/ recoger/ cobrar.',
          EjempIng:''
        },
        {
          Pregunta:'PULL OFF',
          Pron:'',
          Significado:'Arrancar, separar/ quitar de un tirón/quitarse de prisa.',
          EjempIng:''
        },
        {
          Pregunta:'PULL ON',
          Pron:'',
          Significado:'Ponerse (de prisa)/ tirar de.',
          EjempIng:''
        },
        {
          Pregunta:'PULL OUT',
          Pron:'',
          Significado:'Sacar, extraer/ tirar hacia fuera.',
          EjempIng:''
        },
        {
          Pregunta:'PULL OVER',
          Pron:'',
          Significado:'Acercar tirando/ derribar, volcar/ hacerse a un lado.',
          EjempIng:''
        },
        {
          Pregunta:'PULL ROUND',
          Pron:'',
          Significado:'Ayudar a uno a reponerse/ reponerse.',
          EjempIng:''
        },
        {
          Pregunta:'PULL THROUGH',
          Pron:'',
          Significado:'Sacar a uno de un apuro o de una enfermedad/ reponerse, recobrar la salud.',
          EjempIng:''
        },
        {
          Pregunta:'PULL TOGETHER',
          Pron:'',
          Significado:'Recuperar/ sobreponerse, serenarse, recuperar la calma.',
          EjempIng:''
        },
        {
          Pregunta:'PULL UP',
          Pron:'',
          Significado:'Alzar, levantar, tirar hacia arriba/ alzar, parar /un vehículo).',
          EjempIng:''
        },
        {
          Pregunta:'PUT ACROSS',
          Pron:'',
          Significado:'Comunicar/ hacer entender/ hacer aceptar.',
          EjempIng:''
        },
        {
          Pregunta:'PUT APART',
          Pron:'',
          Significado:'Separar a alguien de otras personas.',
          EjempIng:''
        },
        {
          Pregunta:'PUT ASIDE',
          Pron:'',
          Significado:'Rechazar, desechar, dejar, poner a un lado.',
          EjempIng:''
        },
        {
          Pregunta:'PUT AWAY',
          Pron:'',
          Significado:'Poner a un lado',
          EjempIng:''
        },
        {
          Pregunta:'PUT BACK',
          Pron:'',
          Significado:'Poner en su sitio, devolver a su lugar/ restituir, volver a poner/ guardar.',
          EjempIng:''
        },
        {
          Pregunta:'PUT BY',
          Pron:'',
          Significado:'Ahorrar, tener dinero ahorrado= (to) put away.',
          EjempIng:''
        },
        {
          Pregunta:'Put  down',
          Pron:'ˈpʊt daʊn',
          Significado:'Dormir (sacrificar un animal)',
          EjempIng:'Putting your pet down is a difficult decision to take.'
        },
        {
          Pregunta:'Put someone down',
          Pron:'ˈpʊt ˈsʌmwʌn daʊn',
          Significado:'Insultar, hacer sentir a alguien estúpido',
          EjempIng:'The students put the substitute teacher down because his pants were too short.'
        },
        {
          Pregunta:'Put something off',
          Pron:'ˈpʊt ˈsʌmθɪŋ ɒf',
          Significado:'Posponer',
          EjempIng:'We had to put the meeting off for next week.'
        },
        {
          Pregunta:'Put something on',
          Pron:'ˈpʊt ˈsʌmθɪŋ ɒn',
          Significado:'Ponerse (una pieza de ropa, peso)',
          EjempIng:'Put on your coat. It’s cold outside.'
        },
        {
          Pregunta:'Put something out',
          Pron:'ˈpʊt ˈsʌmθɪŋ aʊt',
          Significado:'Extinguir',
          EjempIng:'The firemen put the fire out.'
        },
        {
          Pregunta:'Put something together',
          Pron:'ˈpʊt ˈsʌmθɪŋ təˈɡeðə',
          Significado:'Armar (piezas)',
          EjempIng:'I’m terrible with putting together build-it-yourself furniture.'
        },
        {
          Pregunta:'PUT FORTH',
          Pron:'',
          Significado:'Alargar/ tender/ extender/ echar/ emplear, desplegar.',
          EjempIng:''
        },
        {
          Pregunta:'PUT FORWARD',
          Pron:'',
          Significado:'Nombrar, presentar, proponer/ hacer.',
          EjempIng:''
        },
        {
          Pregunta:'PUT IN',
          Pron:'',
          Significado:'Meter, introducir, instalar/ insertar/ interponer/ presentar, aducir.',
          EjempIng:''
        },
        {
          Pregunta:'PUT ONE OVER ON',
          Pron:'',
          Significado:'Ganar por la mano a alguin, engañar a alguien.',
          EjempIng:''
        },
        {
          Pregunta:'PUT OUT',
          Pron:'',
          Significado:'Apagar, sacar, poner fuera, mandar a pasearse, echar, expulsar.',
          EjempIng:''}
          ,
        {
          Pregunta:'Put through',
          Pron:'ˈpʊt θruː',
          Significado:'Pasar a alguien (teléfono)',
          EjempIng:'Could you put me through Mr. Smith, please?'
        },
        {
          Pregunta:'PUT TOGETHER',
          Pron:'',
          Significado:'Poner juntos, juntar, reunir.',
          EjempIng:''
        },
        {
          Pregunta:'PUT UP',
          Pron:'',
          Significado:'Levantar, subir, colgar, alojar, alzar.',
          EjempIng:''
        },
        {
          Pregunta:'Put up with someone/something',
          Pron:'ˈpʊt ʌp wɪð ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Soportar/tolerar',
          EjempIng:'I can’t put up with my neighbours.'
        },
        {
          Pregunta:'PUT UPON',
          Pron:'',
          Significado:'Molestar a, incomodar a, pedirle mucho a, abusar de la amabilidad de.',
          EjempIng:''
        },
        {
          Pregunta:'Reach out for',
          Pron:'riːtʃ aʊt fɔː',
          Significado:'Tratar de alcanzar',
          EjempIng:'Try to reach out for the easiest solution.'
        },
        {
          Pregunta:'Read out',
          Pron:'riːd aʊt',
          Significado:'Leer en voz alta',
          EjempIng:'She read the tale out to the children.'
        },
        {
          Pregunta:'RIDE ABOUT, (TO) RIDE AROUND',
          Pron:'',
          Significado:'Pasearse a caballo, en coche, en bicicleta.',
          EjempIng:''
        },
        {
          Pregunta:'RIDE AWAY',
          Pron:'',
          Significado:'Alejarse, irse, partir.',
          EjempIng:''
        },
        {
          Pregunta:'RIDE BACK',
          Pron:'',
          Significado:'Volver a caballo, en bicicleta, etc.',
          EjempIng:''
        },
        {
          Pregunta:'RIDE ON',
          Pron:'',
          Significado:'Depender de.',
          EjempIng:''
        },
        {
          Pregunta:'RIDE OUT',
          Pron:'',
          Significado:'Aguantar hasta el final de.',
          EjempIng:''
        },
        {
          Pregunta:'RIP OFF',
          Pron:'',
          Significado:'Arrancar/ timar.',
          EjempIng:''
        },
        {
          Pregunta:'RIP UP',
          Pron:'',
          Significado:'Romper, hacer pedazos.',
          EjempIng:''
        },
        {
          Pregunta:'ROUND DOWN',
          Pron:'',
          Significado:'Redondear (a la baja).',
          EjempIng:''
        },
        {
          Pregunta:'ROUND OFF',
          Pron:'',
          Significado:'Completar, acabar.',
          EjempIng:''
        },
        {
          Pregunta:'ROUND ON',
          Pron:'',
          Significado:'Volverse contra.',
          EjempIng:''
        },
        {
          Pregunta:'ROUND UP',
          Pron:'',
          Significado:'Redondear (al alza)/ acorralar/ reunir, juntar.',
          EjempIng:''
        },
        {
          Pregunta:'RUN ABOUT',
          Pron:'',
          Significado:'Correr de acá para allá',
          EjempIng:''
        },
        {
          Pregunta:'RUN ACROSS',
          Pron:'',
          Significado:'Encontrarse con, atravesar corriendo, tropezar con.',
          EjempIng:''
        },
        {
          Pregunta:'RUN AFTER',
          Pron:'',
          Significado:'Perseguir.',
          EjempIng:''
        },
        {
          Pregunta:'RUN ALONG',
          Pron:'',
          Significado:'Irse.',
          EjempIng:''
        },
        {

          Pregunta:'Run away',
          Pron:'rʌn əˈweɪ',
          Significado:'Huir/escapar',
          EjempIng:'He ran away before the police could catch him.'
        },
        {
          Pregunta:'RUN AWAY WITH',
          Pron:'',
          Significado:'Escaparse con/ no te vayas a creer que/ te dejas llevar por.',
          EjempIng:''
        },
        {
          Pregunta:'RUN DOWN',
          Pron:'',
          Significado:'Atropellar/ criticar/ agotar(se)/ bajar corriendo/ pararse (un reloj), enfermar.',
          EjempIng:''
        },
        {
          Pregunta:'RUN IN',
          Pron:'',
          Significado:'Entrar corriendo, rodar.',
          EjempIng:''
        },
        {
          Pregunta:'Run into someone/something',
          Pron:'rʌn ˈɪntə ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Encontrar por casualidad',
          EjempIng:'I ran into my cousin yesterday at the market.'
        },
        {
          Pregunta:'RUN OFF',
          Pron:'',
          Significado:'Escapar corriendo, imprimir/ irse corriendo.',
          EjempIng:''
        },
        {
          Pregunta:'RUN OFF WITH',
          Pron:'',
          Significado:'Escaparse con, llevarse.',
          EjempIng:''
        },
        {
          Pregunta:'Run out',
          Pron:'rʌn aʊt',
          Significado:'Quedarse sin algo',
          EjempIng:'I  ran out  of flour so I couldn’t bake a cake.'
        },
        {
          Pregunta:'RUN OUT OF',
          Pron:'',
          Significado:'Quedarse sin (gasolina, agua, sal)',
          EjempIng:''
        },
        {
          Pregunta:'Run over someone/something',
          Pron:'rʌn ˈəʊvə ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Atropellar/arrollar',
          EjempIng:'I accidentally  ran over  your dog.'
        },
        {
          Pregunta:'RUN THROUGH',
          Pron:'',
          Significado:'Ensayar/ repasar/ echar un vistazo a.',
          EjempIng:''
        },
        {
          Pregunta:'RUN UP',
          Pron:'',
          Significado:'Subir corriendo/ acumular/ izar/ subir corriendo.',
          EjempIng:''
        },
        {
          Pregunta:'Save up',
          Pron:'seɪv ʌp',
          Significado:'Ahorrar dinero (para algo en concreto)',
          EjempIng:'I’m saving up money for a new car.'
        },
        {
          Pregunta:'SEE ABOUT',
          Pron:'',
          Significado:'Indagar',
          EjempIng:''
        },
        {
          Pregunta:'See off',
          Pron:'ˈsiː ɒf',
          Significado:'Despedirse',
          EjempIng:'We all went to see Sandra off and wish her good luch.'
        },
        {
          Pregunta:'SEE TO',
          Pron:'',
          Significado:'Encargarse de',
          EjempIng:''
        },
        {
          Pregunta:'Sell out',
          Pron:'sel aʊt',
          Significado:'Agotarse',
          EjempIng:'I couldn’t get tickets for the concert. They had sold out.'
        },
        {
          Pregunta:'SEND ALONG',
          Pron:'',
          Significado:'Despachar',
          EjempIng:''
        },
        {
          Pregunta:'Send   something   back',
          Pron:'send ˈsʌmθɪŋ ˈbæk',
          Significado:'Devolver',
          EjempIng:'My letter got sent back to me because I used the wrong stamp.'
        },
        {
          Pregunta:'SEND DOWN',
          Pron:'',
          Significado:'Bajar (algo)',
          EjempIng:''
        },
        {
          Pregunta:'SEND FOR',
          Pron:'',
          Significado:'Enviar por',
          EjempIng:''
        },
        {
          Pregunta:'SEND OFF',
          Pron:'',
          Significado:'Despachar,despedir (trabajadores)',
          EjempIng:''
        },
        {
          Pregunta:'SEND ROUND',
          Pron:'',
          Significado:'Circular',
          EjempIng:''
        },
        {
          Pregunta:'SEND UP',
          Pron:'',
          Significado:'Subir (algo)',
          EjempIng:''
        },
        {
          Pregunta:'SET ABOUT',
          Pron:'',
          Significado:'Empezar a, ponerse a/ atacar, agredir.',
          EjempIng:''
        },
        {
          Pregunta:'SET AGAINST'
          ,Pron:'',
          Significado:'Enemistar con, poner en contra de/ contraponer, sopesar.',
          EjempIng:''
        },
        {
          Pregunta:'SET APART',
          Pron:'',
          Significado:'Distinguir, hacer diferente.',
          EjempIng:''
        },
        {
          Pregunta:'SET BACK',
          Pron:'',
          Significado:'Apartar, retirar/ retrasar, atrasar/ costar.',
          EjempIng:''
        },
        {
          Pregunta:'SET DOWN',
          Pron:'',
          Significado:'Poner por escrito, escribir/ dejar/ establecer, fijar, asentar, colocar.',
          EjempIng:''
        },
        {
          Pregunta:'SET FORTH',
          Pron:'',
          Significado:'Emprender marcha, partir.',
          EjempIng:''
        },
        {
          Pregunta:'SET IN',
          Pron:'',
          Significado:'Empezar, comenzar/ surgir/ declararse.',
          EjempIng:''
        },
        {
          Pregunta:'SET OFF',
          Pron:'',
          Significado:'Partir(para un viaje), salir, ponerse en camino/ hacer estallar, hacer explotar/ realzar.',
          EjempIng:''
        },
        {
          Pregunta:'SET ON',
          Pron:'',
          Significado:'Echar/ atacar, agredir.',
          EjempIng:''
        },
        {
          Pregunta:'SET OUT',
          Pron:'',
          Significado:'Partir, salir/ proponerse, tener la intención de, querer.',
          EjempIng:''
        },
        {
          Pregunta:'SET TO',
          Pron:'',
          Significado:'Ponerse a, empezar a.',
          EjempIng:''
        },
        {
          Pregunta:'Set something up',
          Pron:'set ˈsʌmθɪŋ ʌp',
          Significado:'Fundar/establecer/crear (un negocio)',
          EjempIng:'Two manufacturing companies were set up in my city.'
        },
        {
          Pregunta:'Set aside',
          Pron:'set əˈsaɪd',
          Significado:'Apartar/reservar',
          EjempIng:'Set those invoices aside, we will check them tomorrow.'
        },
        {
          Pregunta:'Settle down',
          Pron:'ˈsetl̩ daʊn',
          Significado:'Establecerse/sentar la cabeza',
          EjempIng:'I finally found a man who’s ready to settle down.'
        },
        {
          Pregunta:'Shop around',
          Pron:'ʃɒp əˈraʊnd',
          Significado:'Comparar precios',
          EjempIng:'She was shopping around looking for the perfect pair of boots.'
        },
        {
          Pregunta:'Show off',
          Pron:'ʃəʊ ɒf',
          Significado:'Presumir/fanfarronear',
          EjempIng:'She was always showing off in front of the whole class.'
        },
        {
          Pregunta:'SHOW UP',
          Pron:'',
          Significado:'Aparecer,  hacer resaltar, hacer destacar/ revelar, sacar a la luz.',
          EjempIng:''
        },
        {
          Pregunta:'SHUT IN',
          Pron:'',
          Significado:'Encerrar',
          EjempIng:''
        },
        {
          Pregunta:'SHUT UP',
          Pron:'',
          Significado:'Callarse, cerrar (una tienda)',
          EjempIng:''
        },
        {
          Pregunta:'Sign in',
          Pron:'saɪn ɪn',
          Significado:'Registrarse/fichar',
          EjempIng:'We must sign in when we arrive.'
        },
        {
          Pregunta:'Sign out',
          Pron:'saɪn aʊt',
          Significado:'Salir (cerrar sesión)/fichar a la salida',
          EjempIng:'The visitors have to sign out before they leave.'
        },
        {
          Pregunta:'Sit back',
          Pron:'sɪt ˈbæk',
          Significado:'Sentarse (de manera relajada)',
          EjempIng:'Just sit back and relax.'
        },
        {
          Pregunta:'SIT DOWN',
          Pron:'',
          Significado:'Sentarse',
          EjempIng:''
        },
        {
          Pregunta:'SIT FOR',
          Pron:'',
          Significado:'Presentarse (a un examen)',
          EjempIng:''
        },
        {
          Pregunta:'SIT UP',
          Pron:'',
          Significado:'Incorporarse, sentarse erguido',
          EjempIng:''
        },
        {
          Pregunta:'Sleep in',
          Pron:'sliːp ɪn',
          Significado:'Levantarse más tarde (de lo habitual)',
          EjempIng:'On Sunday I can sleep in because I don’t have to go to work.'
        },
        {
          Pregunta:'Sleep over',
          Pron:'sliːp ˈəʊvə',
          Significado:'Quedarse a dormir en casa de alguien (informal)',
          EjempIng:'Mum, can my friend sleep over tonight?'
        },
        {
          Pregunta:'SLIP AWAY',
          Pron:'',
          Significado:'Pasar, irse/ irse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP BY',
          Pron:'',
          Significado:'Pasar, transcurrir.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP INTO',
          Pron:'',
          Significado:'Ponerse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP OFF',
          Pron:'',
          Significado:'Quitarse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP ON',
          Pron:'',
          Significado:'Ponerse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP OUT',
          Pron:'',
          Significado:'Escaparse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP OUT OF',
          Pron:'',
          Significado:'Quitarse.',
          EjempIng:''
        },
        {
          Pregunta:'SLIP UP',
          Pron:'',
          Significado:'Equivocarse, cometer un error/ cometer un desliz, meter la pata.',
          EjempIng:''
        },
        {
          Pregunta:'Slow down',
          Pron:'sləʊ daʊn',
          Significado:'Disminuir velocidad',
          EjempIng:'Drivers need to slow down and be careful on slippery roads.'
        },
        {
          Pregunta:'Sort something out',
          Pron:'sɔːt ˈsʌmθɪŋ aʊt',
          Significado:'Poner en orden',
          EjempIng:'I must sort all this mess out.'
        },
        {
          Pregunta:'SPEAK FOR',
          Pron:'',
          Significado:'Hablar a favor de',
          EjempIng:''
        },
        {
          Pregunta:'SPEAK TO',
          Pron:'',
          Significado:'Hablar con',
          EjempIng:''
        },
        {
          Pregunta:'Speak up',
          Pron:'spiːk ʌp',
          Significado:'Hablar en voz (más) alta',
          EjempIng:'I can’t hear. Can you speak up?'
        },
        {
          Pregunta:'Split up',
          Pron:'splɪt ʌp',
          Significado:'Separar(se)/dividir',
          EjempIng:'My parents split up when I was just a baby.'
        },
        {
          Pregunta:'SPLIT UP',
          Pron:'',
          Significado:'Dividirse, separarse',
          EjempIng:''
        },
        {
          Pregunta:'STAND ASIDE',
          Pron:'',
          Significado:'Apartarse, quitarse de en medio/ no tomar parte, mantenerse al margen.',
          EjempIng:''
        },
        {
          Pregunta:'STAND BACK',
          Pron:'',
          Significado:'Apartarse, echarse hacia atrás, alejarse/ distanciarse.',
          EjempIng:''
        },
        {
          Pregunta:'STAND BY',
          Pron:'',
          Significado:'Cruzarse de brazos, quedarse sin hacer nada/ estar preparado.',
          EjempIng:''
        },
        {
          Pregunta:'STAND DOWN',
          Pron:'',
          Significado:'Retirarse/ dimitir/ retirarse, abandonar el estrado.',
          EjempIng:''
        },
        {
          Pregunta:'STAND FOR',
          Pron:'',
          Significado:'Significar, querer decir/ representar/ defender, apoyar.',
          EjempIng:''
        },
        {
          Pregunta:'STAND IN FOR',
          Pron:'',
          Significado:'Sustituir, suplir.',
          EjempIng:''
        },
        {
          Pregunta:'STAND OFF',
          Pron:'',
          Significado:'Mantenerse alejado',
          EjempIng:''
        },
        {
          Pregunta:'Stand out',
          Pron:'stænd aʊt',
          Significado:'Destacar',
          EjempIng:'I need to create a visual CV which stands out'
        },
        {
          Pregunta:'STAND OVER',
          Pron:'',
          Significado:'Vigilar a, velar a.',
          EjempIng:''
        },
        {
          Pregunta:'STAND TO',
          Pron:'',
          Significado:'Estar en estado de alerta/ poner en estado de alerta.',
          EjempIng:''
        },
        {
          Pregunta:'STAND UP',
          Pron:'',
          Significado:'Ponerse de pie, destacar',
          EjempIng:''
        },
        {
          Pregunta:'STAND UP FOR',
          Pron:'',
          Significado:'Defender/ apoyar.',
          EjempIng:''
        },
        {
          Pregunta:'STAND UP TO',
          Pron:'',
          Significado:'Hacer frente a, resistir a.',
          EjempIng:''
        },
        {
          Pregunta:'STAY AT',
          Pron:'',
          Significado:'Hospedarse',
          EjempIng:''
        },
        {
          Pregunta:'STAY BY',
          Pron:'',
          Significado:'Permanecer al lado de',
          EjempIng:''
        },
        {
          Pregunta:'STAY IN',
          Pron:'',
          Significado:'Quedarse en casa',
          EjempIng:''
        },
        {
          Pregunta:'STAY OUT',
          Pron:'',
          Significado:'Quedarse fuera de casa',
          EjempIng:''
        },
        {
          Pregunta:'STEP ACROSS',
          Pron:'',
          Significado:'Atravesar',
          EjempIng:''
        },
        {
          Pregunta:'STEP DOWN',
          Pron:'',
          Significado:'Bajar',
          EjempIng:''
        },
        {
          Pregunta:'STEP IN',
          Pron:'',
          Significado:'Entrar',
          EjempIng:''
        },
        {
          Pregunta:'STEP OUT',
          Pron:'',
          Significado:'Salir',
          EjempIng:''
        },
        {
          Pregunta:'STEP UP',
          Pron:'',
          Significado:'Subir',
          EjempIng:''
        },
        {
          Pregunta:'STEP UP TO',
          Pron:'',
          Significado:'Acercarse a (alguien)',
          EjempIng:''
        },
        {
          Pregunta:'Stick to   something',
          Pron:'stɪk tə ˈsʌmθɪŋ',
          Significado:'Limitarse a hacer algo',
          EjempIng:'If you stick to my instructions, everything will be fine.'
        },
        {
          Pregunta:'STOP BY',
          Pron:'',
          Significado:'Quedarse al lado de',
          EjempIng:''
        },
        {
          Pregunta:'STOP IN',
          Pron:'',
          Significado:'Quedarse en casa',
          EjempIng:''
        },
        {
          Pregunta:'STOP UP',
          Pron:'',
          Significado:'Empastar (una muela), tapar (una botella)',
          EjempIng:''
        },
        {
          Pregunta:'Switch something off',
          Pron:'swɪtʃ ˈsʌmθɪŋ ɒf',
          Significado:'Apagar',
          EjempIng:'Can I switch off the light?'
        },
        {
          Pregunta:'Switch something on',
          Pron:'swɪtʃ ˈsʌmθɪŋ ɒn',
          Significado:'Encender',
          EjempIng:'I switched the telly on to watch the news.'
        },
        {
          Pregunta:'Take   something   off',
          Pron:'teɪk ˈsʌmθɪŋ ɒf',
          Significado:'Quitar(pieza de ropa)',
          EjempIng:'Take off  your coat and come in.'
        },
        {
          Pregunta:'Take after someone',
          Pron:'teɪk ˈɑːftə ˈsʌmwʌn',
          Significado:'Parecerse a un pariente',
          EjempIng:'He takes after his dad. Both are stubborn.'
        },
        {
          Pregunta:'TAKE APART',
          Pron:'',
          Significado:'Desmontar, deshacer/ echar por tierra.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE ASIDE',
          Pron:'',
          Significado:'Llevar a un lado.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE AWAY',
          Pron:'',
          Significado:'Llevarse, quitar/ restar/ llevar.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE BACK',
          Pron:'',
          Significado:'Recibir otra vez, aceptar algo devuelto/ readmitir.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE DOWN',
          Pron:'',
          Significado:'Escribir al dictado, bajar (algo),  quitar, bajar/ desmontar/ apuntar/ humillar.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE FOR',
          Pron:'',
          Significado:'Tomar por (equivocarse)',
          EjempIng:''
        },
        {
          Pregunta:'TAKE IN',
          Pron:'',
          Significado:'Engañar, meter,  dar cobijo a, alojar, recoger/ engañar/ asimilar.',
          EjempIng:''
        },
        {
          Pregunta:'Take off',
          Pron:'teɪk ɒf',
          Significado:'Despegar',
          EjempIng:'My plane took off later than it was scheduled.'
        },
        {
          Pregunta:'TAKE ON',
          Pron:''
          ,Significado:'Hacerse cargo de, encargarse de, aceptar/ asumir.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE OUT',
          Pron:'',
          Significado:'Sacar, quitar/ invitar a salir/ llevar de paseo.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE OUT ON',
          Pron:'',
          Significado:'Tomarla con, desquitarse con, descargarse.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE OVER',
          Pron:'',
          Significado:'Tomar (posesión de), apoderarse de/ ocupar.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE OVER FROM',
          Pron:'',
          Significado:'Relevar, sustituir.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE TO',
          Pron:'',
          Significado:'Tomar cariño a/ darse a/ empezar a, aficionarse a, Llevar a.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE UP',
          Pron:'',
          Significado:'Subir, ocupar/ llevar, quitar, levantar.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE UP ON',
          Pron:'',
          Significado:'Hacer puntualizaciones sobre/ aceptar (una oferta).',
          EjempIng:''
        },
        {
          Pregunta:'TAKE UP WITH',
          Pron:'',
          Significado:'Empezar a salir con, entrar en relaciones con/ hablar de.',
          EjempIng:''
        },
        {
          Pregunta:'TAKE UPON',
          Pron:'',
          Significado:'Encargarse de.',
          EjempIng:''
        },
        {
          Pregunta:'TALK ABOUT',
          Pron:'',
          Significado:'Hablar acerca de',
          EjempIng:''
        },
        {
          Pregunta:'TALK OF',
          Pron:'',
          Significado:'Hablar de',
          EjempIng:''
        },
        {
          Pregunta:'TALK TO',
          Pron:'',
          Significado:'Hablar con',
          EjempIng:''
        },
        {
          Pregunta:'TEAR AWAY',
          Pron:'',
          Significado:'Quitar (rasgando)',
          EjempIng:''
        },
        {
          Pregunta:'TEAR OFF',
          Pron:'',
          Significado:'Separar (rasgando)',
          EjempIng:''
        },
        {
          Pregunta:'TEAR UP',
          Pron:'',
          Significado:'Hacer pedazos (rasgando)',
          EjempIng:''
        },
        {
          Pregunta:'TELL AGAINST',
          Pron:'',
          Significado:'Obrar en contra de.',
          EjempIng:''
        },
        {
          Pregunta:'TELL APART',
          Pron:'',
          Significado:'Distinguir.',
          EjempIng:''
        },
        {
          Pregunta:'TELL OFF',
          Pron:'',
          Significado:'Regañar, reñir/ destacar.',
          EjempIng:''
        },
        {
          Pregunta:'TELL ON',
          Pron:'',
          Significado:'Chivarse de.',
          EjempIng:''
        },
        {
          Pregunta:'Think something over',
          Pron:'ˈθɪŋk ˈsʌmθɪŋ ˈəʊvə',
          Significado:'Considerar/pensar detenidamente',
          EjempIng:'I`ll have to think over what you have said and then, we’ll see. '
        },
        {
          Pregunta:'Throw something away',
          Pron:'ˈθrəʊ ˈsʌmθɪŋ əˈweɪ',
          Significado:'Deshacerse de/tirar',
          EjempIng:'I threw away all my school books.'
        },
        {
          Pregunta:'THROW BACK',
          Pron:'',
          Significado:'Devolver/ echar atrás.',
          EjempIng:''
        },
        {
          Pregunta:'THROW BACK ON',
          Pron:'',
          Significado:'Obligar a recurrir a.',
          EjempIng:''
        },
        {
          Pregunta:'THROW DOWN',
          Pron:'',
          Significado:'Tirar hacia abajo',
          EjempIng:''
        },
        {
          Pregunta:'THROW IN',
          Pron:'',
          Significado:'Incluir gratis/ sacar de banda, tirar hacia dentro',
          EjempIng:''
        },
        {
          Pregunta:'THROW OFF',
          Pron:'',
          Significado:'Echar fuera, deshacerse de, librarse de/ despistar/quitarse.',
          EjempIng:''
        },
        {
          Pregunta:'THROW ON',
          Pron:'',
          Significado:'Ponerse.',
          EjempIng:''
        },
        {
          Pregunta:'THROW OUT',
          Pron:'',
          Significado:'Arrojar, echar, expulsar/ rechazar/ tirar, tirar a la basura.',
          EjempIng:''
        },
        {
          Pregunta:'Throw up',
          Pron:'ˈθrəʊ ʌp',
          Significado:'Vomitar',
          EjempIng:'I was so dizzy that I threw up.'
        },
        {
          Pregunta:'TICK AWAY',
          Pron:'',
          Significado:'Transcurrir.',
          EjempIng:''
        },
        {
          Pregunta:'TICK OFF',
          Pron:'',
          Significado:'Marcar, señalar/ regañar, reñir/ fastidiar, dar rabia.',
          EjempIng:''
        },
        {
          Pregunta:'TICK OVER',
          Pron:'',
          Significado:'Marchar al ralentí, estar en marcha/ ir tirando.',
          EjempIng:''
        },
        {
          Pregunta:'Tidy up',
          Pron:'ˈtaɪdi ʌp',
          Significado:'Recoger',
          EjempIng:'If you want to go out with your friends, you must tidy up your room first.'
        },
        {
          Pregunta:'TRY FOR',
          Pron:'',
          Significado:'Tratar de obtener.',
          EjempIng:''
        },
        {
          Pregunta:'Try   something   on',
          Pron:'traɪ ˈsʌmθɪŋ ɒn',
          Significado:'Probarse (ropa)',
          EjempIng:'You should try that shirt on. It is beautiful!'
        },
        {
          Pregunta:'Try something out',
          Pron:'traɪ ˈsʌmθɪŋ aʊt',
          Significado:'Probar (producto)',
          EjempIng:'Try our new biscuits! They are delicious!'
        },
        {
          Pregunta:'TURN AGAINST',
          Pron:'',
          Significado:'Poner en contra/ ponerse en contra de.',
          EjempIng:''
        },
        {
          Pregunta:'TURN AROUND / TURN ROUND',
          Pron:'',
          Significado:'Volverse, darse la vuelta/ volver, darle la vuelta a.',
          EjempIng:''
        },
        {
          Pregunta:'TURN AWAY',
          Pron:'',
          Significado:'Mirar a otro lado,  no dejar entrar/ volver la cabeza, volver la espalda.',
          EjempIng:''
        },
        {
          Pregunta:'TURN BACK',
          Pron:'',
          Significado:'Darse la vuelta, hacer retroceder, hacer volver/ retrasar/ volverse atrás.',
          EjempIng:''
        },
        {
          Pregunta:'Turn something down',
          Pron:'tɜːn ˈsʌmθɪŋ daʊn',
          Significado:'Bajar volumen',
          EjempIng:'Please  turn  the volume  down . I’m trying to sleep!'
        },
        {
          Pregunta:'TURN IN',
          Pron:'',
          Significado:'Entregar a la policía/ acostarse.',
          EjempIng:''
        },
        {
          Pregunta:'TURN INTO',
          Pron:'',
          Significado:'Convertirse',
          EjempIng:''
        },
        {
          Pregunta:'Turn something off',
          Pron:'tɜːn ˈsʌmθɪŋ ɒf',
          Significado:'Apagar',
          EjempIng:'Turn the TV off if you are not watching it.'
        },
        {
          Pregunta:'Turn something on',
          Pron:'tɜːn ˈsʌmθɪŋ ɒn',
          Significado:'Encender',
          EjempIng:'Can you turn on the lights, please?'
        },
        {
          Pregunta:'Turn someone on',
          Pron:'tɜːn ˈsʌmwʌn ɒn',
          Significado:'Poner (cachondo) a alguien',
          EjempIng:'His sexy voice turns me on.'
        },
        {
          Pregunta:'TURN OUT',
          Pron:'',
          Significado:'Apagar/ producir, fabricar/ vaciar/ desmoldar.',
          EjempIng:''
        },
        {
          Pregunta:'TURN OVER',
          Pron:'',
          Significado:'Volcar, poner boca abajo, dar la vuelta.',
          EjempIng:''
        },
        {
          Pregunta:'TURN TO',
          Pron:'',
          Significado:'Acudir a, recorrer a, recurrir a/ buscar, pasar a.',
          EjempIng:''
        },
        {
          Pregunta:'Turn up',
          Pron:'tɜːn ʌp',
          Significado:'Aparecer de repente',
          EjempIng:'All of a sudden, he turned up at my house.'
        },
        {
          Pregunta:'Wake up',
          Pron:'weɪk ʌp',
          Significado:'Despertarse',
          EjempIng:'I hate waking up early!'
        },
        {
          Pregunta:'WAIT ABOUT, (TO) WAIT AROUND',
          Pron:'',
          Significado:'Esperar, perder el tiempo.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT BEHIND',
          Pron:'',
          Significado:'Quedarse, quedarse para esperar a uno.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT IN',
          Pron:'',
          Significado:'Estar en casa esperando a uno.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT ON, WAIT UPON',
          Pron:'',
          Significado:'Servir a uno, desvivirse por mimar a uno.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT OUT',
          Pron:'',
          Significado:'Quedarse hasta el final de, esperar más que uno.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT UP',
          Pron:'',
          Significado:'Velar, no acostarse, seguir sin acostarse.',
          EjempIng:''
        },
        {
          Pregunta:'WAIT UPON',
          Pron:'',
          Significado:'Cumplimentar a uno, presentar sus respetos a uno.',
          EjempIng:''
        },
        {
          Pregunta:'WALK ABOUT',
          Pron:'',
          Significado:'Andar de acá para allá,  pasearse, ir y venir.',
          EjempIng:''
        },
        {
          Pregunta:'WALK ACROSS',
          Pron:'',
          Significado:'Cruzar.',
          EjempIng:''
        },
        {
          Pregunta:'WALK ALONG',
          Pron:'',
          Significado:'Andar por',
          EjempIng:''
        },
        {
          Pregunta:'WALK AROUND',
          Pron:'',
          Significado:'Dar una vuelta, pasearse.',
          EjempIng:''
        },
        {
          Pregunta:'WALK AWAY',
          Pron:'',
          Significado:'Irse, alejarse, negarse a, evadirse de.',
          EjempIng:''
        },
        {
          Pregunta:'WALK AWAY WITH',
          Pron:'',
          Significado:'Llevarse, copar, largarse con, robar.',
          EjempIng:''
        },
        {
          Pregunta:'WALK BACK',
          Pron:'',
          Significado:'Volver a pie, regresar andando.',
          EjempIng:''
        },
        {
          Pregunta:'WALK DOWN',
          Pron:'',
          Significado:'Bajar caminando.',
          EjempIng:''
        },
        {
          Pregunta:'WALK IN',
          Pron:'',
          Significado:'Entrar, entrar sin llamar/ interrumpir a alguien.',
          EjempIng:''
        },
        {
          Pregunta:'WALK INTO',
          Pron:'',
          Significado:'Entrar/ caer en una trampa/ ser embaucado.',
          EjempIng:''
        },
        {
          Pregunta:'WALK OFF',
          Pron:'',
          Significado:'Marcharse,  quitarse un dolor de encima dando un paseo.',
          EjempIng:''
        },
        {
          Pregunta:'WALK ON',
          Pron:'',
          Significado:'Seguir andando o caminando/ salir de figurante.',
          EjempIng:'She tried to greet him in the street, but he walked on without saying hello'
        },
        {
          Pregunta:'WALK OUT',
          Pron:'',
          Significado:'Salir, retirarse/ declararse en huelga/ marcharse.',
          EjempIng:''
        },
        {
          Pregunta:'WALK OVER',
          Pron:'',
          Significado:'Atropellar a, tratar a alguien a coces/ ganar.',
          EjempIng:''
        },
        {
          Pregunta:'WALK THROUGH',
          Pron:'',
          Significado:'Ensayar por primera vez.',
          EjempIng:''
        },
        {
          Pregunta:'WALK UP',
          Pron:'',
          Significado:'Subir a pie.',
          EjempIng:''
        },
        {
          Pregunta:'Warm up',
          Pron:'wɔːm ʌp',
          Significado:'Calentar(se)',
          EjempIng:'It’s important to warm up your body before any physical activity.'
        },
        {
          Pregunta:'Wear off',
          Pron:'weər ɒf',
          Significado:'Desaparecer',
          EjempIng:'The painkiller will wear off after a few hours.'
        },
        {
          Pregunta:'Work   something   out',
          Pron:'ˈwɜːk ˈsʌmθɪŋ aʊt',
          Significado:'Calcular',
          EjempIng:'Work out how much cooperation is required.'
        },
        {
          Pregunta:'Work out',
          Pron:'ˈwɜːk aʊt',
          Significado:'Ejercitarse',
          EjempIng:'I  work out  every morning.'
        },
        {
          Pregunta:'WORK UNDER',
          Pron:'',
          Significado:'Trabajar a las órdenes de',
          EjempIng:''
        },
        {
          Pregunta:'Write down',
          Pron:'ˈraɪt daʊn',
          Significado:'Tomar notas/anotar',
          EjempIng:'Write down all your answers.'
        },
        {
          Pregunta:'Zoom in on',
          Pron:'zuːm ɪn ɒn',
          Significado:'Centrar (atención) en algo/ ampliar imagen',
          EjempIng:'Click here to zoom in on the object.'
        }
      ]).then(function(count) {
        console.log('Base de datos inicializada');
      });
    }
  });
});
