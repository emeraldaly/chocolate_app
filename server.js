var express = require('express');
var exphbs = require('express-handlebars');
var Sequelize = require('sequelize');
var session = require("express-session");

var connection = new Sequelize('chocolate_db', 'root', {

});
var app = express();

var PORT = process.env.PORT || 8080;

app.set('view engine', 'handlebars');

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main'
}));

//routes
app.get('/', function(req, res) {
  res.render('chocolate_db');
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT); 
});