var express = require("express"),
    app = express();

app.get("/", function (req, res) {
    res.send("Hello my dear user!");
});

app.listen("8000", function () {
    console.log("Server is running!");
});
