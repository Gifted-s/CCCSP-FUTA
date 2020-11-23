

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var multer = require('multer');
var upload = multer({dest : 'uploads/'});
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Nexmo = require('nexmo');
var mongodb = require('mongodb');
var validator = require('express-validator');
const request= require('request');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Mongo_Store = require('connect-mongo')(session);
var flash = require('connect-flash');


var express_hbs=require('express-handlebars');

var socketio= require('socket.io');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users'); 
//  mongoose.connect('mongodb://localhost/peculiar-app', {useNewUrlParser:true}, ()=>{
//    console.log('Database Connected')
//  }); 
//mongodb://cccspfuta:cccspfuta123@ds163164.mlab.com:63164/cccspfuta
//mongodb+srv://sunkanmi:sunkanmi123@cluster0.hmaeu.mongodb.net/cccspfuta?retryWrites=true&w=majority
mongoose.connect('mongodb://cccspfuta:cccspfuta123@ds163164.mlab.com:63164/cccspfuta',{useNewUrlParser:true}, ()=>{
  console.log('Connected to database')
});

var app = express();

require('./config/admin');
var User = require('./models/User');

const date = new Date();
var day_of_week= date.getDay();
if(day_of_week===6){

    User.find({'wed': 'present'}, function (err, present) {
      present.forEach(function (update_att) {
        User.update(update_att , {$set:{'wed': 'absent'}} , function (done) {
          return done
        })
      });

    });
    User.find({'fri': 'present'}, function (err, present) {
      present.forEach(function (update_att) {
        User.update(update_att , {$set:{'fri': 'absent'}} , function (done) {
          return done
        })
      });

    });
    User.find({'sun': 'present'}, function (err, present) {
      present.forEach(function (update_att) {
        User.update(update_att , {$set:{'sun': 'absent'}} , function (done) {
          return done
        })
      });

    });



  }


// view engine setup
app.engine('.hbs', express_hbs({defaultLayout: 'layout' , extname:'.hbs' }));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(session({
  saveUninitialized: false,
  secret:'secret',
  resave: false,
  store: new Mongo_Store({mongooseConnection : mongoose.connection}),
  cookie : {maxAge: 180*60*1000}
}));
// app.use(function (req , res ,next) {
//   // res.locals.login = req.isAuthenticated();
//   // // res.locals.session =req.session;
// });
app.use(passport.initialize());
app.use(passport.session());
app.get('/keepAlive', (req,res)=>{
  res.status(200).end();
})
app.use(validator());
app.use(flash());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;



// setInterval(()=>{
//   console.log('alive!!!')
// request('https://celefuta.herokuapp.com/keepAlive');
// }, 
// 60000
// )
