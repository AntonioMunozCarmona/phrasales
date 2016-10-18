var path = require('path');

//Cargar modelo ORM
var Sequelize = require('sequelize');

//Usar BBDD SQLite

var sequelize = new Sequelize(null, null, null,
  {dialect: 'sqlite', storage: 'baseDatos.sqlite'}
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
          Ejemp_Ing:"I don't care for football."
        },
        {
          Pregunta:'ADD UP',
          Pron:'',
          Significado:'Totalizar',
          Ejemp_Ing:'When you have added up all the money you have spent today, you`ll get a shock!'
        },
        {
          Pregunta:'ADD UP TO',
          Pron:'',
          Significado:'Alcanzar un total',
          Ejemp_Ing:'Seven and five add up to twelve.'
        },
        {
          Pregunta:'ANSWER BACK',
          Pron:'',
          Significado:'Contestar de malos modos',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ANSWER FOR',
          Pron:'',
          Significado:'Rresponder de',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK ABOUT',
          Pron:'',
          Significado:'Preguntar por (un asunto)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK AFTER',
          Pron:'',
          Significado:'Preguntar por la salud',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK BACK',
          Pron:'',
          Significado:'Invitar a volver',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK DOWN',
          Pron:'',
          Significado:'Invitar a bajar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK FOR',
          Pron:'',
          Significado:'Pedir, preguntar por',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK IN',
          Pron:'',
          Significado:'Invitar a entrar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK OUT',
          Pron:'',
          Significado:'Invitar a salir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK UP',
          Pron:'',
          Significado:'Invitar a subir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'ASK UP TO',
          Pron:'',
          Significado:'Pedir hasta (un precio)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Ask someone out',
          Pron:'ɑːsk ˈsʌmwʌn aʊt',
          Significado:'Pedirle salir/una cita a alguien',
          Ejemp_Ing:'Tom asked Janet out to dinner.'
        },
        {
          Pregunta:'BACK AWAY',
          Pron:'',
          Significado:'Retroceder',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BACK OUT',
          Pron:'',
          Significado:'Volver atrás',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Back someone up',
          Pron:'ˈbæk ˈsʌmwʌn ʌp',
          Significado:'Apoyar/respaldar/ reforzar',
          Ejemp_Ing:'My family always backs me up in my decisions.'
        },
        {
          Pregunta:'BE ABOUT',
          Pron:'',
          Significado:'Estar por (un lugar)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE AWAY',
          Pron:'',
          Significado:'Estar fuera',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE BACK',
          Pron:'',
          Significado:'Estar de vuelta',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE FOR',
          Pron:'',
          Significado:'Estar a favor de',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE IN',
          Pron:'',
          Significado:'Estar en casa',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE OFF',
          Pron:'',
          Significado:'Irse, estar apagado',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE ON',
          Pron:'',
          Significado:'Estar encendido',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE OUT',
          Pron:'',
          Significado:'Estar fuera',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE OVER',
          Pron:'',
          Significado:'Estar acabado',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BE UP',
          Pron:'',
          Significado:'Estar levantado',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BEND DOWN',
          Pron:'',
          Significado:'Agacharse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BEND OVER',
          Pron:'',
          Significado:'Inclinarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BLOW AWAY',
          Pron:'',
          Significado:'Llevarse (el viento)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BLOW DOWN',
          Pron:'',
          Significado:'Derrumbarse por el viento',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BLOW OFF',
          Pron:'',
          Significado:'Dejar salir (el vapor)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BLOW OUT',
          Pron:'',
          Significado:'Apagar (se) (una llama)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Blow up',
          Pron:'bləʊ ʌp',
          Significado:'(Hacer) explotar',
          Ejemp_Ing:'The bomb might blow up if someone touches it. '
        },
        {
          Pregunta:'Blow something up',
          Pron:'bləʊ ˈsʌmθɪŋ ʌp',
          Significado:'Hinchar/inflar',
          Ejemp_Ing:'The little boy blew up lots of balloons for his birthday party.'
        },
        {
          Pregunta:'BREAK AWAY',
          Pron:'',
          Significado:'Soltarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Break down',
          Pron:'breɪk daʊn',
          Significado:'Averiarse',
          Ejemp_Ing:'Sorry I’m late! My car broke down on my way to work.'
        },
        {
          Pregunta:'Break down',
          Pron:'breɪk daʊn',
          Significado:'Derrumbarse emocionalmente',
          Ejemp_Ing:'He broke down in tears when he heard the bad news.'
        },
        {
          Pregunta:'Break in',
          Pron:'breɪk ɪn',
          Significado:'Forzar la entrada',
          Ejemp_Ing:'Somebody broke in our house last night.'
        },
        {
          Pregunta:'BREAK OFF',
          Pron:'',
          Significado:'Romper (se) (relaciones)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Break out',
          Pron:'breɪk aʊt',
          Significado:'Escapar de prisión',
          Ejemp_Ing:'The prisoners broke out from prison.'
        },
        {
          Pregunta:'Break out',
          Pron:'breɪk aʊt',
          Significado:'Surgir de manera inesperada',
          Ejemp_Ing:'Panic broke out suddenly.'
        },
        {
          Pregunta:'Break through',
          Pron:'breɪk θruː',
          Significado:'Atravesar un obstáculo',
          Ejemp_Ing:'The thief broke through the crowded street.'
        },
        {Pregunta:'Break up',
        Pron:'breɪk ʌp',
        Significado:'Acabar con una relación',
        Ejemp_Ing:'My boyfriend and I broke up two months ago.'
      },
        {
          Pregunta:'BRING ABOUT',
          Pron:'',
          Significado:'Acarrear',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BRING ALONG',
          Pron:'',
          Significado:'Traer (consigo)',Ejemp_Ing:''
        },
        {
          Pregunta:'BRING BACK',
          Pron:'',
          Significado:'Devolver',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BRING DOWN',
          Pron:'',
          Significado:'Derribar, rebajar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BRING IN',
          Pron:'',
          Significado:'Hacer entrar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BRING OUT',
          Pron:'',
          Significado:'Hacer salir, publicar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Bring someone down',
          Pron:'brɪŋ ˈsʌmwʌn daʊn',
          Significado:'Entristecer',
          Ejemp_Ing:'Every time I listen to this song, it brings me down.'
        },
        {
          Pregunta:'Bring someone up',
          Pron:'brɪŋ ˈsʌmwʌn ʌp',
          Significado:'Criar',
          Ejemp_Ing:'I was born in London but I was brought up in Madrid.'
        },
        {
          Pregunta:'Bring something back',
          Pron:'brɪŋ ˈsʌmθɪŋ ˈbæk',
          Significado:'Devolver/volver a traer algo',
          Ejemp_Ing:'Remember to bring your books back to the school library.'
        },
        {
          Pregunta:'Bring something up',
          Pron:'brɪŋ ˈsʌmθɪŋ ʌp',
          Significado:'Mencionar algo',
          Ejemp_Ing:'The boss brought up an important issue at the meeting.'
        },
        {
          Pregunta:'BRUN AWAY',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BRUSH OFF',
          Pron:'',
          Significado:'Quitar el polvo',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BURN AWAY',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BURN DOWN',
          Pron:'',
          Significado:'Derrumbarse (por el fuego)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BURN OUT',
          Pron:'',
          Significado:'Consumirse (el fuego)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BURN UP',
          Pron:'',
          Significado:'Consumirse (por el fuego)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BUY FOR',
          Pron:'',
          Significado:'Comprar por o para',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BUY OVER',
          Pron:'',
          Significado:'Sobornar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'BUY UP',
          Pron:'',
          Significado:'Acaparar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CALL AT',
          Pron:'',
          Significado:'Hacer una visita, hacer escala',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CALL AWAY',
          Pron:'',
          Significado:'Seguir llamando',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CALL DOWN',
          Pron:'',
          Significado:'Llamar (a alguien) para que baje',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CALL FOR',
          Pron:'',
          Significado:'Pedir a voces, exigir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CALL IN',
          Pron:'',
          Significado:'Llamar (a alguien) para que entre',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Call on someone',
          Pron:'kɔːl ɒn ˈsʌmwʌn',
          Significado:'Visitar a alguien',
          Ejemp_Ing:'I’m going to call on some friends in London.'
        },
        {
          Pregunta:'Call out',
          Pron:'kɔːl aʊt',
          Significado:'Hablar en un tono elevado',
          Ejemp_Ing:'The teacher was calling out our names so that we could all listen.'
        },
        {
          Pregunta:'CALL OVER',
          Pron:'',
          Significado:'Pasar lista, enumerar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Call someone back',
          Pron:'kɔːl ˈsʌmwʌn ˈbæk',
          Significado:'Devolver la llamada',
          Ejemp_Ing:'I can’t speak right now. I will call you back later.'
        },
        {
          Pregunta:'Call someone up',
          Pron:'kɔːl ˈsʌmwʌn ʌp',
          Significado:'Telefonear a alguien',
          Ejemp_Ing:'She used to call me up in the middle of the night.'
        },
        {
          Pregunta:'Call something off',
          Pron:'kɔːl ˈsʌmθɪŋ ɒf',
          Significado:'Cancelar',
          Ejemp_Ing:'The match was called off.'
        },
        {
          Pregunta:'Care for someone',
          Pron:'keə fə ˈsʌmwʌn',
          Significado:'Cuidar a alguien',
          Ejemp_Ing:'I’m caring for my ill grandma.'
        },
        {
          Pregunta:'CARRY ALONG',
          Pron:'',
          Significado:'Persuadir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CARRY OFF',
          Pron:'',
          Significado:'Llevarse a la fuerza',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Carry on',
          Pron:'ˈkæri ɒn',
          Significado:'Continuar haciendo algo',
          Ejemp_Ing:'Carry on with your work in silence!'
        },
        {
          Pregunta:'Carry out',
          Pron:'kæri aʊt',
          Significado:'Hacer/llevar a cabo',
          Ejemp_Ing:'He carried out an experiment.'
        },
        {
          Pregunta:'Catch on to',
          Pron:'kætʃ ɒn tuː',
          Significado:'Comprender/entender',
          Ejemp_Ing:'Although he knew nothing about the lesson, he caught on very quickly.'
        },
        {
          Pregunta:'Catch up',
          Pron:'kætʃ ʌp',
          Significado:'Ponerse a la altura de/alcanzar el ritmo de',
          Ejemp_Ing:
          'The teacher told me I´ll have to work very hard if I wanted to catch up with the rest of my classmates.'
        },
        {
          Pregunta:'Check in',
          Pron:'tʃek ɪn',
          Significado:'Registrarse en un hotel/aeropuerto',
          Ejemp_Ing:'After we checked in, we looked for the boarding gate.'
        },
        {
          Pregunta:'Check something out',
          Pron:'tʃek ˈsʌmθɪŋ aʊt ',
          Significado:'Fijarse en algo (porque vale la pena)',
          Ejemp_Ing:'Check out that car!! It’s awesome!!'
        },
        {
          Pregunta:'Cheer up',
          Pron:'tʃɪər ʌp ',
          Significado:'Alegrar(se)',
          Ejemp_Ing:'She cheered up when she knew she had passed all her exams.'
        },
        {
          Pregunta:'Chip in',
          Pron:'tʃɪp ɪn ',
          Significado:'Contribuir con (económica, ayuda)',
          Ejemp_Ing:'All the students chipped in 5 euros and bought the teacher a present.'
        },
        {
          Pregunta:'Chop up',
          Pron:'tʃɒp ʌp',
          Significado:'Cortar en pedazos (con un cuchillo/hacha)',
          Ejemp_Ing:'The cooked chopped up some bananas.'
        },
        {
          Pregunta:'Clean something up',
          Pron:'kliːn ˈsʌmθɪŋ ʌp ',
          Significado:'Recoger',
          Ejemp_Ing:'You must clean up your bedroom if you want to watch TV.'
        },

        {
          Pregunta:'CLEAR AWAY',
          Pron:'',
          Significado:'Dispersar (se)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CLEAR OFF',
          Pron:'',
          Significado:'Marcharse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CLEAR OUT',
          Pron:'',
          Significado:'Marcharse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CLEAR UP',
          Pron:'',
          Significado:'Aclararse (el tiempo,un misterio)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CLOSE DOWN',
          Pron:'',
          Significado:'Cerrar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CLOSE UP',
          Pron:'',
          Significado:'Acercarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME ABOUT',
          Pron:'',
          Significado:'Suceder',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Come across something/someone',
          Pron:'kʌm əˈkrɒs ˈsʌmθɪŋ ˈsʌmwʌn',
          Significado:'Encontrar algo/a alguien por casualidad',
          Ejemp_Ing:'I came across my lost earring while I was sweeping the floor.'
        },
        {
          Pregunta:'COME AFTER',
          Pron:'',
          Significado:'Seguir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Come along',
          Pron:'kʌm əˈlɒŋ',
          Significado:'Marchar',
          Ejemp_Ing:'Everything is coming along perfectly well.'
        },
        {
          Pregunta:'Come along',
          Pron:'kʌm əˈlɒŋ',
          Significado:'Acompañar',Ejemp_Ing:'Come along with me to the bus stop.'},
        {
          Pregunta:'Come around',
          Pron:'kʌm əˈraʊnd ',
          Significado:'Hacer una visita',Ejemp_Ing:'You must come around to visit next week.'},
        {
          Pregunta:'COME AT',
          Pron:'',
          Significado:'Embestir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME AWAY',
          Pron:'',
          Significado:'Desprenderse',Ejemp_Ing:''
        },
        {
          Pregunta:'COME BACK',
          Pron:'',
          Significado:'Regresar, volver',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME DOWN',
          Pron:'',
          Significado:'Bajar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME FOR',
          Pron:'',
          Significado:'Venir por (en busca de)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Come from somewhere',
          Pron:'kʌm frəm ˈsʌmweə',
          Significado:'Ser originario de',
          Ejemp_Ing:'She is from Denmark.'
        },
        {
          Pregunta:'COME IN',
          Pron:'',
          Significado:'Entrar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME OFF',
          Pron:'',
          Significado:'Desprenderse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME ON',
          Pron:'',
          Significado:'¡Vamos! (en imperativo)',
          Ejemp_Ing:''

        },
        {
          Pregunta:'COME OUT',
          Pron:'',
          Significado:'Salir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME TO',
          Pron:'',
          Significado:'Ascender (una suma), volver en sí.',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME UP',
          Pron:'',
          Significado:'Subir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COME UP TO',
          Pron:'',
          Significado:'Acercarse a',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COUNT IN',
          Pron:'',
          Significado:'Incluir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Count on someone/something',
          Pron:'kaʊnt ɒn ˈsʌmwʌn ˈsʌmθɪŋ',
          Significado:'Contar con alguien',
          Ejemp_Ing:'You can count on me.'
        },
        {
          Pregunta:'COUNT UP',
          Pron:'',
          Significado:'Calcular',
          Ejemp_Ing:''
        },
        {
          Pregunta:'COUNT UP TO',
          Pron:'',
          Significado:'Contar hasta',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CRY FOR',
          Pron:'',
          Significado:'Pedir llorando',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Cry out',
          Pron:'kraɪ aʊt ',
          Significado:'Chillar/gritar',
          Ejemp_Ing:'She cried out in pain.'
        },
        {
          Pregunta:'CRY OVER',
          Pron:'',
          Significado:'Lamentarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CRY TO',
          Pron:'',
          Significado:'Llamar a gritos',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Cut back',
          Pron:'kʌt ˈbæk',
          Significado:'Reducir la cantidad',
          Ejemp_Ing:'He has cut back on drinking.'
        },
        {
          Pregunta:'Cut back on something',
          Pron:'kʌt ˈbæk ɒn ˈsʌmθɪŋ ',
          Significado:'Reducir el consumo',
          Ejemp_Ing:'I must cut back on sugary drinks if I want to lose some weight.'
        },
        {
          Pregunta:'CUT DOWN',
          Pron:'',
          Significado:'Reducir gastos, talar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CUT IN',
          Pron:'',
          Significado:'Interrumpir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CUT OFF',
          Pron:'',
          Significado:'Separar de un tajo',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CUT OUT',
          Pron:'',
          Significado:'Recortar, omitir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CUT THROUGH',
          Pron:'Acortar por un atajo',
          Significado:'',
          Ejemp_Ing:''
        },
        {
          Pregunta:'CUT UP',
          Pron:'Trinchar, triturar',
          Significado:'',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Cut something down',
          Pron:'kʌt ˈsʌmθɪŋ daʊn',
          Significado:'Talar',
          Ejemp_Ing:'They cut the oldest tree in the forest.'
        },
        {
          Pregunta:'Cut something off',
          Pron:'kʌt ˈsʌmθɪŋ ɒf ',
          Significado:'Cortar el suministro',
          Ejemp_Ing:'The gas company cut me off.'
        },
        {
          Pregunta:'Cut something out',
          Pron:'kʌt ˈsʌmθɪŋ aʊt ',
          Significado:'Recortar',
          Ejemp_Ing:'I cut this ad out of the newspaper.'
        },
        {
          Pregunta:'Deal with',
          Pron:'diːl wɪð ',
          Significado:'Tratar',
          Ejemp_Ing:'He deals with difficult customers every day.'
        },
        {
          Pregunta:'Die away',
          Pron:'daɪ əˈweɪ ',
          Significado:'Difuminarse/desvanecerse',
          Ejemp_Ing:'The strange sound died away.'
        },
        {
          Pregunta:'DIE DOWN',
          Pron:'',
          Significado:'Apaciguarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DIE OUT',
          Pron:'',
          Significado:'Extinguirse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DO UP',
          Pron:'',
          Significado:'Abrochar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Do something up',
          Pron:'də ˈsʌmθɪŋ ʌp ',
          Significado:'Abrochar/atar/subirse',
          Ejemp_Ing:'Do up your zipper!'
        },
        {
          Pregunta:'Do without',
          Pron:'də wɪðˈaʊt',
          Significado:'Prescindir de',
          Ejemp_Ing:'I can’t do without my mobile.'
        },
        {
          Pregunta:'DRAW AWAY',
          Pron:'',
          Significado:'Alejarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW BACK',
          Pron:'',
          Significado:'Retroceder',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW DOWN',
          Pron:'',
          Significado:'Bajar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW IN',
          Pron:'',
          Significado:'Economizar, encoger (se)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW OFF',
          Pron:'',
          Significado:'Apartarse',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW ON',
          Pron:'',
          Significado:'Aproximarse, retirar fondos',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW OUT',
          Pron:'',
          Significado:'Sacar, redactar, alargarse (el día)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRAW UP',
          Pron:'',
          Significado:'Para (un vehículo)',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Dress up',
          Pron:'dres ʌp ',
          Significado:'Vestirse de manera formal',
          Ejemp_Ing:'We must dress up for a formal event.'
        },
        {
          Pregunta:'DRIVE AWAY',
          Pron:'',
          Significado:'Ahuyentar, alejarse en coche',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRIVE BACK',
          Pron:'',
          Significado:'Rechazar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRIVE BY',
          Pron:'',Significado:'Pasar en coche',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRIVE IN',
          Pron:'',
          Significado:'Entrar en coche, introducir',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRIVE OFF',
          Pron:'',
          Significado:'Alejarse en coche, ahuyentar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'DRIVE OUT',
          Pron:'',
          Significado:'Salir en coche, expulsar',
          Ejemp_Ing:''
        },
        {
          Pregunta:'Drop in',
          Pron:'drɒp ɪn',
          Significado:'Acudir sin cita previa',
          Ejemp_Ing:'I might drop in for a while next week.'
        },
        {
          Pregunta:'Drop out',
          Pron:'drɒp aʊt',
          Significado:'Dejar de ir/abandonar',
          Ejemp_Ing:'I dropped out of the German class because I couldn’t catch up with the level.'
        },
        {
          Pregunta:'Drop someone/something off',
          Pron:'drɒp ˈsʌmwʌn ˈsʌmθɪŋ ɒf',
          Significado:'Llevar a alguien a un sitio y dejarlo allí',
          Ejemp_Ing:'I have to drop my mum off at the doctor before I go to work.'
        }
      ]).then(function(count) {
        console.log('Base de datos inicializada');
      });

    }
  });
});
