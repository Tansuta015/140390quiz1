var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/Home',function(req,res){
    res.render('pages/Home');
});


app.get('/student',function(req,res){
    res.render('pages/student');
});


app.get('/subject',function(req,res){
    res.render('pages/subject');
});





console.log('App is running at http://localhost:8081');
app.listen(8081);