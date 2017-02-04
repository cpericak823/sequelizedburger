//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the index.js file
var db = require("../models/index.js");

//require the connection file
var connection = require("../config/config.json");

//export the routes to be accessed later
module.exports = function(app) {

    //route to get the data and return an html page
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });
    });

    //A query which adds a new burger based on the userInput to the database
    app.post("/", function(req, res) {
        console.log(req.body);
        db.Burger.create(req.body).then(function(dbBurgers) {
            res.render("index", { index: dbBurgers });
        });

    });

    //a query that updates the burger devour value to true
    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurgers) {

            res.render("index", { index: dbBurgers });
        });
    });
};
