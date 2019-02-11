const express = require('express');
const mongoose = require('./config/mongoose');
mongoose.connect();

const path = require('path');
const rfs = require('rotating-file-stream')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressHbs  = require('express-handlebars');
const passport = require('passport');

// TODO: add user profile
require('./config/passport');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const logDirectory = path.join(__dirname, 'log')

// express app
const app = express();

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

// create a rotating write stream
let accessLogStream = rfs('access.log', {
    interval: '1d', // rotate daily
    path: logDirectory
  })
   
// setup the logger
app.use(logger('combined', { stream: accessLogStream }));

// add middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routing 
app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
