// DEPENDENCIES

var mysql = require("mysql");
var express = require("express");
var path = require("path");




// SETS UP THE EXPRESS APP
var app = express();
var PORT = 3001;

// SETS UP THE EXPRESS APP TO HANDLE DATA PARSING
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// ROUTES
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "CampingApp",
    port: 3306,
  });
  // CONNECTION RESPONSE
  connection.connect(function (err) {
    console.log("SQL connected as id " + connection.threadId)
  });


// START SERVER
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });