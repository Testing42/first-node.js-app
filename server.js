var http = require('http');
var fs = require('fs');

var host = '127.0.0.1';
var port = '3000';

fs.readFile('index.html', function(err, html) {
    if (err) {
        console.log(err);
        return;
    }

    var server = http.createServer(function(req, res) {
        res.statuscode = 200; //this means success
        res.write(html)
        res.end('Hello World')
    });


    server.listen(port, host, function() {
        console.log('Server running on port ' + port);
    });

});