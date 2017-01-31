//require node packages
var express = require("express");
var exprhbs = require("express-handlebars");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//set the port and use express
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//require handlebars
app.engine("handlebars", exprhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//require the route
require("./controllers/burgers-controller.js")(app);

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//override the method
app.use(methodOverride("_method"));

//listen to the port
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
