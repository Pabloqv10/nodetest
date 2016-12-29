var express = require("express");
var app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get(9090, () => {
    console.log("Server running 9090");
});