var express = require("express"),
    mongo = require("mongodb"),
    MongoClient = mongo.MongoClient,
    app = express(),
    dbUrl = "mongodb://localhost:27017/videoRental";

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendFile('index.html');
});

app.get("/movies", function (req, res) {
    var limit = 5;

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("movies").find({}, {limit: limit}).toArray(function (err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(docs);
        });
    });
});

app.get("/actors", function (req, res) {
    var limit = 5;

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("actors").find({}, {limit: limit}).toArray(function (err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(docs);
        });
    });
});

app.listen("8000", function () {
    console.log("Server is running!");
});
