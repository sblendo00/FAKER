var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
// tutte le cose che scrivo qui le devo richiamare nell'app.use sotto
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dettagliRouter = require('./routes/dettagli');
var generateRouter = require('./routes/generate');
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//qui assegno un percorso alle mie pagine .js
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dettagli', dettagliRouter)
app.use('/users/generate', generateRouter)
app.use('/api', apiRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
//qua crei l'errore
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // ti manda alla pagina error.pug
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
