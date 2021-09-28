// dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// routes
const x = require('./routes/html');
const z = require('./routes/api');

// referenced from express documentation
// 4001 because 3001 wasn't working for me
const app = express();
const port = 4001;

app.listen(port, function() {
    console.log(`now listening on port ${port}`)
})