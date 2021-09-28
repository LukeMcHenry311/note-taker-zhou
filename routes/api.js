//TODO
// dependencies
const fs = require('fs');
var express = require('express')
var app = express()
// api get requests
app.get('/', function (req, res) {
    res.send('hello world');
})
// api post requests