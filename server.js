var express = require('express');
var app = express();
var mysql = require('mysql')
    var connection = mysql.createConnection({
    host     : 'www.db4free.net',
    username     : 's140390',
    password : 'abc123**',
    database : 'db140390'

app.set('view engine', 'ejs');

app.get('/',function(req,res){
    res.render('pages/home');

});
app.get('/home',function(req,res){
    res.render('pages/home');
});

//Display
app.get('/students',function(req,res){
connection.connect()
connection.query('SELECT * from students', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
});

console.log('App is running at http://localhost:8081');
app.listen(8081);