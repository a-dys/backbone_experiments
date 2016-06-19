var express = require("express"),
    bodyParser = require("body-parser"),
    mongo = require("mongodb"),
    BSON = require('bson').BSONPure,
    MongoClient = mongo.MongoClient,
    app = express(),
    dbUrl = "mongodb://localhost:27017/videoRental";

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

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

        db.collection("movies").find({}, {}).toArray(function (err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(docs);
            db.close();
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
            db.close();
        });
    });
});

app.get("/categories", function (req, res) {

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }

        db.collection("categories").find({}).toArray(function (err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(docs);
            db.close();
        });
    });
});

app.get("/movie/:id", function (req, res) {
    var id = req.params.id,
        isValid = BSON.ObjectID.isValid(id);
    if (!isValid) {
        res.satus(500);
        res.json({error: true});
        return;
    }
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }
        db.collection("movies").find({_id: new mongo.ObjectID(id)}).toArray(function (err, docs) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(docs[0]);
            db.close();
        });
    });
});
app.put("/movie/:id", function (req, res) {
    var id = req.params.id,
        isValid = BSON.ObjectID.isValid(id);
    if (!isValid) {
        res.satus(500);
        res.json({error: true});
        return;
    }
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }
        delete req.body._id;
        db.collection("movies").findAndModify({_id: new mongo.ObjectID(id)}, {}, {$set: req.body}, {new: true}, function (err, doc) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(doc);
            db.close();
        });
    });
});

app.post("/movies", function (req, res) {

    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }
        db.collection("movies").insert(req.body, function (err, doc) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json(doc.ops[0]);
            db.close();
        });
    });
});

app.delete("/movie/:id", function (req, res) {
    var id = req.params.id,
        isValid = BSON.ObjectID.isValid(id);
    if (!isValid) {
        res.satus(500);
        res.json({error: true});
        return;
    }
    MongoClient.connect(dbUrl, function (err, db) {
        if (err) {
            res.status(500);
            res.json({error: true});

            return;
        }
        db.collection("movies").findAndRemove({_id: new mongo.ObjectID(id)}, function (err, doc) {
            if (err) {
                res.status(500);
                res.json({error: true});

                return;
            }
            res.json({deleted: true});
            db.close();
        });
    });
});

app.listen("8000", function () {
    console.log("Server is running!");
});
