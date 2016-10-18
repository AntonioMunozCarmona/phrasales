var express = require('express');
var path = require('path');
var logger = require('morgan');
var favicon = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
import stylus from 'stylus';

// Configuracion
import config from './lib/config';
import hbsHelpers from './lib/handlebars';

//Rutas
var routes = require('./routes/index');
var users = require('./routes/users');

const app = express();

// Loading config
global.$config = config;

// Stylus middleware
if (!$config().html.css.stylusPrecompile) {
  app.use(
    stylus.middleware({
      src: path.join(__dirname, '/public/stylesheets'),
      dest: path.join(__dirname, '/public/stylesheets'),
      compile: function(str, path) {
        return stylus(str)
          .set('filename', path)
          .set('compress', true);
      }
    })
  );
}

// Sending config to templates
app.use((req, res, next) => {
  res.locals.config = $config();
  next();
});

// Handlebars setup
app.engine($config().views.engine, exphbs({
  extname: $config().views.extension,
  defaultLayout: $config().views.layout,
  layoutsDir: path.join(__dirname, '/views/layouts'),
  partialsDir: path.join(__dirname, '/views/partials'),
  helpers: hbsHelpers
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', $config().views.engine);

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

//app.use(favicon(__dirname + '/favicon.ico'));

//Rutas
app.use('/', routes);
app.use('/users', users);

// Disabling x-powered-by
app.disable('x-powered-by');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen($config().serverPort || 3000);

