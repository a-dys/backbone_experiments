var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dbUrl = "mongodb://localhost/27017/database_name";

app.get("/", function (req, res) {
    res.send("Hello my dear user!");
});

app.listen("8000", function () {
    console.log("Server is running!");
});
