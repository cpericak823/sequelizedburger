    //require the mysql connect.js file
    var connection = require("../config/connect.js");

    module.exports = function() {

        //a function that queries the database and shows all the burgers in the database
        function showDatabase() {
            connection.query("SELECT burger_name FROM burgers WHERE burger_name = ?", [userInput], function(err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.log(res[i].burger_name);
                }
            });
        }
    };
