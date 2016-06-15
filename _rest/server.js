var fs = require("fs"),
    express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

var CLIENTS = JSON.parse(fs.readFileSync("clients.json"));

function getNextId() {
    var id = 0;
    CLIENTS.forEach(function (client) {
        if (client === null) return;
        if (client.id > id) {
            id = client.id;
        }
    });

    return ++id;
}

function getAllItems() {
    var items = [];
    CLIENTS.forEach(function (client) {

        if (client === null) return;

        items.push(client);
    });

    return items;
}

function getItem(id) {
    var item = null;
    CLIENTS.forEach(function (client) {
        if (client === null) return;

        if (client.id == id) {
            item = client;
        }
    });

    return item;
}

function addItem(item) {
    item.id = getNextId();
    CLIENTS.push(item);
    return item;
}

function updateItem(item) {
    CLIENTS.forEach(function (client) {
        if (client === null) return;
        if (client.id == item.id) {
            for (var prop in item) {
                if (item.hasOwnProperty(prop)) {
                    client[prop] = item[prop];
                }
            }
        }
    });
    return getItem(item.id);
}

function deleteItem(id) {
    CLIENTS.forEach(function (client, index) {
        if (client === null) return;
        if (client.id == id) {
            CLIENTS[index] = null;
        }
    });
}

app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.sendfile("index.html");
});

app.get("/clients", function (req, res) {
    var data = getAllItems();
    res.json(data);
});

app.get("/client/:id", function (req, res) {
    var data = getItem(req.params.id);
    res.json(data);
});

app.post("/clients", function (req, res) {
    var data = addItem(req.body);
    res.json(data);
});

app.put("/client/:id", function (req, res) {
    var data = updateItem(req.body);
    res.json(data);
});

app.delete("/client/:id", function (req, res) {
    deleteItem(req.params.id);
    res.send("ok");
});

app.listen("8000", function () {
    console.log("Server is running!");
});