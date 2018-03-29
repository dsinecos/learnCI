const express = require('express');
const app = express();

app.get('/', function (req, res, next) {
    console.log("Request received");
    res.status(200).send("Request received");
})

var PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log("App listening on PORT ", PORT);
})

module.exports = app;