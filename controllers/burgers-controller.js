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
        db.Burgers.findAll({}).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });
    });

    //A query which adds a new burger based on the userInput to the database
    app.post("/", function(req, res) {
        console.log(req.body);
        db.Burgers.create(req.body).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });

    });

    //a query that updates the burger
    app.put("/", function(req, res) {
        db.Burgers.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurgers) {
            //write a function that updates the devour value to true on click of the devour button
            res.json(dbBurgers);
        });
    });

    //a query that deletes the burger from the database
    app.delete("/:id", function(req, res) {
        db.Burgers.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbBurgers) {
            res.json(dbBurger_db);
        });
    });
};
