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
        }
      ]).then(function(count) {
        console.log('Base de datos inicializada');
      });

    }
  });
});
