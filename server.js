var express = require('express');

const config = require('./data')

var app = express();

app.use(express.static('../public2'))

let vari = {
    id: "1234"
}

console.log(JSON.stringify(vari,null,2))

app.listen(config.portnum);