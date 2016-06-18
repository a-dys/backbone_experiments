var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dbUrl = "mongodb://localhost/27017/database_name";

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen("8000", function () {
    console.log("Server is running!");
});
