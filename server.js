var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;


var Sequelize = require('sequelize');
var connection = new Sequelize('chocolate_db', 'root');

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//routes
app.get('/', function(req, res) {
  res.render('home');
});

connection.sync().then(function() {
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT); 
  });
});