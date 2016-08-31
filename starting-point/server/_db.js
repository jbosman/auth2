'use strict';

var Sequelize = require('sequelize');
var secrete = require('../secret.js');
var databaseURI = secrete.databaseURL;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
