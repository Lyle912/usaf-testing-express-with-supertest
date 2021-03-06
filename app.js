var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('cookie-session');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var books = require('./routes/books');
var authors = require('./routes/authors');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2]}));
app.use(express.static(path.join(__dirname, 'public')));

/* For Tests
app.get("/", (req, res) => {
  res.send({greeting: "Welcome to the Book Catalog API!"})
})
app.get('/books', (req, res) => {
  res.json(books)
});
*/

app.get('/', function (req, res, next) {
  res.redirect('/api/v1');
});
app.use('/api/v1', index);
//app.use('/api/v1/books/id', books);
app.use('/api/v1/books', books);
app.use('/api/v1/authors', authors);

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
    res.json({
      'error': {
        message: err.message,
        error: err
      }
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    'error': {
      message: err.message,
      error: {}
    }
  });
});


module.exports = app;
