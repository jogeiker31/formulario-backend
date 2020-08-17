// Requires

var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors");
const process = require('process');
//Inicializar variables

var app = express();

// CORS
app.use(cors({ origin: "*" }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    res.header('Access-Control-Allow-Credentials', false);
    next();
});


// bodyParser 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());


app.use('/formulario', require('./routes/formulario.routes'));




    var server = app.listen(3005, () => {
        console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
    });

