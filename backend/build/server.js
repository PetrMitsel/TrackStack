"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
// lib/app.ts
var express = require("express");
// Create a new express application instance
var app = express();
var PORT = process.env.PORT || 4000;
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(PORT, function () {
    console.log("Connected on port " + PORT);
});
