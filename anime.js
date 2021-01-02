var PORT = process.env.PORT || 5000;
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

var path = require('path');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(path.join(__dirname ,'public')));

app.get('/', (req, res) => res.render('pages/html/index.html'));

server.listen(PORT, function() {
  console.log('server is working');
});