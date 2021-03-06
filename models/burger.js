const orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    insertOne: function(cols, vals, cb) {
      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
      });
    },
    updateOne: function(objColVals, devoured, cb) {
      orm.updateOne("burgers", objColVals, devoured, function(res) {
        cb(res);
      });
    }
  };
  
  module.exports = burger;