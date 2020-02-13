var express = require('express');
var router = express.Router();
var passport = require('passport');
var Admin = require('../models/Admin');
var User = require('../models/User');
/* GET home page. */
router.get('/', function(req, res, next) {
    var message = req.flash('error');
Admin.find().then((admin)=>{
   
})
    res.render('home/land_page', {title: 'Peculiar-app', hasError: message.length > 0, message: message});

});
router.get('/admin', function(req, res, next) {
    var message = req.flash('error');
Admin.find().then((admin)=>{
   
})
    res.render('home/index', {title: 'Peculiar-app', hasError: message.length > 0, message: message});

});


router.get('/land_page', function(req, res, next) {
    var message = req.flash('error');

    res.render('home/land_page', {title: 'Peculiar-app', hasError: message.length > 0, message: message});

});
router.get('/partials/sidebar' , function (req, res , next) {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();

    User.find({"m_b": month, "d_b": day}, function (err, user) {
        var userchunk = [];
        var chunk = 1;
        for (var i = 0; i < user.length; i += chunk) {
            userchunk.push(user.slice(i, i + chunk));
        }
        const success = req.flash('success');
        console.log(user);
        res.render('partials/sidebar', {note: user , success :success, isSuccessful :success.length>0})
    });
});
router.post('/signin', passport.authenticate('locals.signin', {
  successFlash:true,
  failureFlash: true,
  successRedirect: '/land_page',
  failureRedirect: '/'
}));
function notLoggedin(req , res , next){
    if(!req.isAuthenticated()){
        console.log('You are logged in');
        return  next();
    }
    console.log('You are not logged in');
    return next()
}
function isLoggedin(req , res , next){
    if(req.isAuthenticated()){
        return  next();
    }

    return res.redirect('/')
}



module.exports = router;
