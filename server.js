var express = require('express');
var exphbs = require('express-handlebars');
var Sequelize = require('sequelize');
var session = require("express-session");

var connection = new Sequelize('class_app_db', 'root', {

});
var app = express();

var PORT = process.env.PORT || 8080;