var express = require('express');
var path = require('path');
require('./config/database')
var logger = require('morgan');

var usersRouter = require('./app/routes/users');
var notesRouter = require('./app/routes/notes');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);
app.use('/notes', notesRouter);

module.exports = app;