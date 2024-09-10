const express = require("express");
const server = express();
const port = 3001;

server.get('./hello', function (req, res) {
    res.send("Hello World");
});

server.listen(port, function() {
    console.log("Listening on " + port)
})