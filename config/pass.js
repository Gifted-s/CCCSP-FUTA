// var passport = require('passport');
// var mongoose = require('mongoose');
// var LocalStrategy = require('passport-local').Strategy;
// mongoose.connect('mongodb//:localhost/peculiar-app');
//
// var OE = require('../models/old_executives');
// var validator = require('express-validator');
// var User = require('../models/User');
// passport.serializeUser(function(user , done ){
//     done(null , user.id);
//
// });
// passport.deserializeUser(function (id  , done ){
//     User.findById(id , function (err , user) {
//         done(err , user);
//     });
//
// });
//
//
//
// passport.use('locals.register' , new LocalStrategy({
//         usernameField: 'firstname',
//         passwordField: 'phone_number',
//         passReqToCallback  : true
//
//     },
//     function( req ,firstname ,phone_number , done ){
// //         var secondname = req.body.secondname;
// //         var level = req.body.level;
// //         var unit = req.body.unit;
// //         var status = req.body.status;
// //         var month = req.body.m_b;
// //         var day = req.body.d_b;
// //         var year = req.body.y_b;
// //         var email= req.body.email;
// //         var whatsapp = req.body.whatsapp;
// //         var facebook = req.body.facebook;
// //         var twitter = req.body.twitter;
// //         var set_name='';
// //         var school = req.body.school;
// //         var quote = req.body.quote;
// //         var phone = req.body.phone_number;
// //         var department = req.body.department;
// //         var role = req.body.executive_role;
// //         var address = req.body.address;
// //         var P_A = 'absent';
// //         var profile_image = req.body.profile_image;
// //         var str = new String(phone_number);
// //         var index = str.indexOf('0');
// //         var country_number = str.replace(index , '234')
// //
// //         req.checkBody('firstname' , 'please enter members first name').notEmpty();
// //         req.checkBody('secondname' , 'please enter members second name').notEmpty();
// //         req.checkBody('level' , 'please enter members level').notEmpty();
// //         req.checkBody('m_b' , 'please enter birth month').notEmpty();
// //         req.checkBody('d_b' , 'please enter  birth day').notEmpty();
// //         req.checkBody('address' , 'please enter members address').notEmpty();
// //         req.checkBody('department' , 'please enter members department').notEmpty();
// //         req.checkBody('phone_number' , 'please enter members phone number').notEmpty().isLength({max:11 , min:11});
// //
// //         var errors = req.validationErrors();
// //         if(errors){
// //             var message = [];
// //             errors.forEach(function (error) {
// //                 message.push(error.msg);
// //             });
// //             return done(null , false , req.flash('error' , message));
// //         }
// //         // User.findOne({'firstname' : firstname} , function(err , user){
// //         //
// //         //     if(err){
// //         //         return done(err)
// //         //     }
// //         //     if(user){
// //         //         return done(null , false, {message: 'Member already exist'})
// //         //     }
// //
// //
// //             var newUser = new User();
// //         var sttr= new String(firstname);
// //         var getname = sttr.charAt(0);
// //         const newname =getname.toLocaleUpperCase();
// //         var Firstname= sttr.replace(getname , newname);
// //
// //
// //             newUser.firstname = Firstname;
// //             newUser.secondname=secondname;
// //             newUser.level=level;
// //             newUser.unit=unit;
// //
// //             newUser.phone_number=country_number;
// //             newUser.status=status;
// //             if(month==="January"){
// //                 newUser.m_b=0;
// //             }
// //             if(month==="February"){
// //                 newUser.m_b=1;
// //             }
// //             if(month==="March"){
// //                 newUser.m_b=2;
// //             }
// //             if(month==="April"){
// //                 newUser.m_b=3;
// //             }
// //             if(month==="May"){
// //                 newUser.m_b=4;
// //             }
// //             if(month==="June"){
// //                 newUser.m_b=5;
// //             }
// //             if(month==="July"){
// //                 newUser.m_b=6;
// //             }
// //             if(month==="August"){
// //                 newUser.m_b=7;
// //             }
// //             if(month==="September"){
// //                 newUser.m_b=8;
// //             }
// //             if(month==="October"){
// //                 newUser.m_b=9;
// //             }
// //             if(month==="November"){
// //                 newUser.m_b=10;
// //             }
// //             if(month==="December"){
// //                 newUser.m_b=11;
// //             }
// //             newUser.d_b=day;
// //             newUser.y_b=year;
// //             newUser.profile_image=profile_image;
// //             newUser.email=email;
// //             newUser.whatsapp=whatsapp;
// //             newUser.twitter=twitter;
// //             newUser.quote=quote;
// //             newUser.department=department;
// //              if(role==="President") {
// //                  User.find({
// //                      'executive_role':
// //                          'President'
// //                  }, function (err, result) {
// //                      var oe = new OE();
// //                      oe.oexecutive = result;
// //                      oe.save();
// //
// //
// //                      result.forEach(function (res) {
// //                          User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                              return user;
// //                          });
// //                      });
// //                  });
// //              }
// //
// //
// //
// //              if(role==='Vice President') {
// //                  User.find({
// //                      'executive_role':
// //                          'Vice President'
// //                  }, function (err, result) {
// //                      var oe = new OE();
// //                      oe.oexecutive = result;
// //                      oe.save();
// //
// //
// //                      result.forEach(function (res) {
// //                          User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                              return user;
// //                          });
// //                      });
// //                  });
// //              }
// //              if(role==='General Secretary') {
// //
// //                  User.find({
// //                      'executive_role':
// //
// //                          'General Secretary'
// //                  }, function (err, result) {
// //                      var oe = new OE();
// //                      oe.oexecutive = result;
// //                      oe.save();
// //
// //
// //                      result.forEach(function (res) {
// //                          User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                              return user;
// //                          });
// //                      });
// //                  });
// //              }
// //              if(role=== 'Brothers Coordinator') {
// //                  User.find({
// //                      'executive_role':
// //
// //                          'Brothers Coordinator'
// //                  }, function (err, result) {
// //                      var oe = new OE();
// //                      oe.oexecutive = result;
// //                      oe.save();
// //
// //
// //                      result.forEach(function (res) {
// //                          User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                              return user;
// //                          });
// //                      });
// //                  });
// //              }
// //              if(role==='Evangelism Coordinator') {
// //                  User.find({
// //                      'executive_role':
// //
// //                          'Evangelism Coordinator'
// //                  }, function (err, result) {
// //                      var oe = new OE();
// //                      oe.oexecutive = result;
// //                      oe.save();
// //
// //
// //                      result.forEach(function (res) {
// //                          User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                              return user;
// //                          });
// //                      });
// //                  });
// //              }
// //              if(role==='Assistant Evangelism Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Assistant Evangelism Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //
// //              if(role==='Choir Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Choir Coordinator'
// //
// //                     },function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// // if(role===  'Assistant Choir Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Assistant Choir Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });
// //             }
// //
// //             if(role===  'Welfare Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Welfare Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //
// //             if(role=== 'Assistant Welfare Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Assistant Welfare Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if(role==='Assistant Welfare Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Assistant Welfare Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //             if(role==='Publicity Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Publicity Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //
// //             if (role==='Assistant Publicity Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Assistant Publicity Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //             if (role==='Academic Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Academic Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role=== 'Assistant Academic Coordinator') {
// //             User.find({'executive_role' :
// //
// //                     'Assistant Academic Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //             if (role==='Drama Unit Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Drama Unit Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role=== 'Assistant Drama Unit Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Assistant Drama Unit Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role==='Ushering Unit Coordinator'){
// //             User.find({'executive_role' :
// //
// //                     'Ushering Unit Coordinator'},function (err , result) {
// //                 var oe = new OE();
// //                 oe.oexecutive = result;
// //                 oe.save();
// //
// //
// //                 result.forEach( function(res) {
// //                     User.update(res, {$set: {'executive_role': []}} , function (err , user) {
// //                         return user;
// //                     });
// //                 });
// //             });}
// //             if(role=== 'Assistance Ushering Unit Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Assistance Ushering Unit Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role==='Sisters Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Sisters Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role==='Assistant Sisters Coordinator') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Assistant Sisters Coordinator'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role==='Ex-Officio1') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Ex-Officio1'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //             if (role==='Ex-Officio2') {
// //                 User.find({
// //                     'executive_role':
// //
// //                         'Ex-Officio2'
// //                 }, function (err, result) {
// //                     var oe = new OE();
// //                     oe.oexecutive = result;
// //                     oe.save();
// //
// //
// //                     result.forEach(function (res) {
// //                         User.update(res, {$set: {'executive_role': []}}, function (err, user) {
// //                             return user;
// //                         });
// //                     });
// //                 });
// //             }
// //
// //
// //
// //
// //
// //
// //
// //
// //
// //             if(role==="None") {
// //                 newUser.executive_role ='';
// //             }
// //             newUser.executive_role =role;
// //             newUser.school =school;
// //
// //             newUser.set_name=set_name;
// //             newUser.facebook=facebook;
// //             newUser.address =address;
// //             newUser.P_A= P_A;
// //
// //
// //             newUser.save( function (err , user) {
// //                 if (err){
// //
// //                     return done(err);
// //
// //                 }
// //                 return done(null , user, {message : `Sussessfully added ${Firstname} ${secondname} to the ${level} brethren `})
// //             });
// //
// //         // });
// //
// //     }));
// //
// //
// //
// //
//
//
//
//
//
//
//
//
//
//
