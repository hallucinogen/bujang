var express = require('express');
var app = express();
var path = require('path');

// Serve public files.
app.use(express.static('public'));

// Send everything else over to index.html. Let the client decide.
app.get('/*', function(req, res) {
  res.sendFile(path.resolve('client/index.html'));
})

// Dokku/heroku default port for NodeJS is 5000.
app.listen(5000);