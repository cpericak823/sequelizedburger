//require express
var express = require("express");

//set the express function equal to the app variable
var app = express();

//require the burger.js file
var databaseQueries = require("../models/burger.js");

//require the connection file
var connection = require("../config/connect.js");

//export the routes to be accessed later
module.exports = function(app) {

    //route to get the data and return an html page
    app.get("/", function(req, res) {

        connection.query("Select * FROM burgers", {

        }, function(err, result) {
            if (err) {
                console.log(err);
            }
            res.render("index", { index: result });
        });

        //A query which adds a new burger based on the userInput to the database
        app.post("/", function(req, res) {
            console.log("got to post");

            //set userInput equal to a variable to be used as a query
            var userInput = req.body;

            //add the burger to the database
            connection.query("INSERT INTO burgers SET ?", {
                burger_name: userInput.burger_name,
                devoured: false
            }, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect("/");
                }
            });

        });

        //a query that updates the burger
        app.put("/", function(req, res) {
            console.log(req.body);
            //update the burger in the database
            connection.query("UPDATE burgers SET burger_name = ?", {

                    burger_name: req.body.burger_name,
                    devoured: true
                },
                function(err) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.redirect("/");
                    }
                });
        });

        //a query that deletes the burger
        app.delete("/:id", function(req, res) {
            connection.query("DELETE FROM burgers WHERE id = ?", {
                id: req.params.id

            }, function(err, res) {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res);
                }
            });
        });
    });
};
