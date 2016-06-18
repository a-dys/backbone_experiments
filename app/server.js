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
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("movies").find({}).toArray(function (err, docs) {
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
