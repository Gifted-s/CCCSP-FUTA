var passport = require('passport');
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
// mongoose.connect('mongodb//:localhost/peculiar-app');
// mongoose.connect('mongodb://cccspfuta:Cccspfuta00;@ds359077.mlab.com:59077/cccspfuta');
var Admin = require('../models/Admin');

var validator = require('express-validator');

passport.serializeUser(function(admin , done ){
    done(null , admin.id);

});
passport.deserializeUser(function (id  , done ){
    Admin.findById(id , function (err , admin) {
        done(err , admin);
    });

});


passport.use('locals.signup' , new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback  : true


    },
    function (req , username, password, done) {
        req.checkBody('username', 'Please enter username!!!').notEmpty();
        req.checkBody('password', 'please enter password').notEmpty().isLength({min: 4});
        req.checkBody('password2', 'password does not match').equals(req.body.password);
        var errors = req.validationErrors();
        if (errors) {
            var message = [];
            errors.forEach(function (error) {
                message.push(error.msg);
            });
            return done(null, false, req.flash('error', message));
        }
        Admin.findOne({'username': username}, function (err, user) {
            if (err) {
                return done(err)
            }
            if (user) {
                return done(null, false, {message: 'Admin already exists'});
            }
            var newAdmin = new Admin();
            newAdmin.username = username;
            newAdmin.password = password;
            newAdmin.save((err, result) => {
                if (err) {
                    return done(err);
                }
                return done(null , result , {message : 'Admin added'})
            })

        });

    }));


passport.use('locals.signin' , new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback  : true


    },
    function (req , username, password, done) {
        req.checkBody('username', 'Please enter username!!!').notEmpty();
        req.checkBody('password', 'please enter password').notEmpty().isLength({min: 4});

        var errors = req.validationErrors();
        if (errors) {
            var message = [];
            errors.forEach(function (error) {
                message.push(error.msg);
            });
            return done(null, false, req.flash('error', message));
        }
        Admin.findOne({'username': username}, function (err, user) {
            if (err) {
                return done(err)
            }
            if (!user) {
                return done(null, false, {message: 'Username does not exist'});
            }
            if (user.password !== password) {
                return done(null, false, {message: 'Wrong password'});
            }


                return done(null , user , {message : `Welcome ${user.username}`} )
            });



    }));












