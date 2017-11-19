var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json());

app.get('/', function(req, res){
    console.log('GET /')
    //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
    var html = fs.readFileSync('index.html');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(html);
});

app.post('/', function(req, res){
    console.log('POST /');
    console.dir(req.body);
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.send(req.challenge);
    res.end(req.body.params.challenge);
});

port = 3000;
app.listen(port);
console.log('Listening at http://localhost:' + port)
