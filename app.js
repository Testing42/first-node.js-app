var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var port = 3000;

var app = express();

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // this shows static pages

app.get('/', function(req, res) {
    res.send('hello world!!!');
});

app.get('/about', function(req, res) {
    res.send('about page');
});

app.listen(3000);
console.log('Server Started on port' + port);

module.exports = app;


// command npm install nodemon -g installs this globally so you can run it anywhere
// without reloading go to file and run nodemon