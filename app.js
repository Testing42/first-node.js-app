var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var pug = require('pug');

var port = 3000;

var app = express();

app.use(function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
})

//app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); // this shows static pages

app.get('/', function(req, res) {
    res.render('index', {
        title: 'Hello World',
        showTitle: true,
        people: ['John', 'Andy', 'pat']
    });
});

app.get('/about', function(req, res) {
    res.send('about page');
});

app.get('/about', function(req, res) {
    res.render('about');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.listen(port);
console.log('Server Started on port ' + port);

module.exports = app;


// command npm install nodemon -g installs this globally so you can run it anywhere
// without reloading go to file and run nodemon


// when looking for tutorials jade is same as pug
//both are template engines that help make webapps