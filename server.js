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

var Chocolate = connection.define('chocolate', {
  name: Sequelize.STRING,
  satisfaction: Sequelize.INTEGER
});

// Chocolate.bulkCreate([
//   {name: 'Dark Chocolate', satisfaction: 8},
//   {name: 'Couverture', satisfaction: 5},
//   {name: 'Milk Chocolate', satisfaction: 10},
//   {name: 'Hershey', satisfaction: 7},
//   {name: 'White Chocolate', satisfaction: 8},
//   {name: 'Unsweetened Chocolate', satisfaction: 5},
//   {name: 'Gianduja', satisfaction: 6},
//   {name: 'Cacao', satisfaction: 4},
//   ]);

//routes
app.get('/', function(req, res) {
  Chocolate.findAll({}).then(function(chocolate) {


  res.render('home', {chocolates});
  });
});

connection.sync().then(function() {
app.listen(PORT, function() {
  console.log("Listening on port %s", PORT); 
  });
});