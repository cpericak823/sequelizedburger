//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the burger.js file
var db = require("../models/index.js");

//require the connection file
var connection = require("../config/config.json");

//export the routes to be accessed later
module.exports = function(app) {

    //route to get the data and return an html page
    app.get("/", function(req, res) {
        db.burger_db.findAll({}).then(function(dbBurger_db) {
            res.json(dbBurger_db);
        });
    });

    //A query which adds a new burger based on the userInput to the database
    app.post("/", function(req, res) {
        console.log(req.body);
        db.burger_db.create(req.body).then(function(dbBurger_db) {
            res.json(dbBurger_db);
        });

    });

    //a query that updates the burger
    app.put("/", function(req, res) {
        db.burger_db.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger_db) {
            //write a function that updates the devour value to true
            res.json(dbBurger_db);
        });
    });

    //a query that deletes the burger
    app.delete("/:id", function(req, res) {
        db.burger_db.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger_db) {
            res.json(dbBurger_db);
        });
    });
};
