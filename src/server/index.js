var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');

// SocketIO
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user connected');
});

// Kafka
//var kafka = require('kafka-node');
//var Producer = kafka.Producer;
//var client = new kafka.Client();
//var producer = new Producer(client);

//producer.createTopics(['status'], false, (err, data) => {
//  console.log('Topic published!');
//});

// Serve public files.  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/admin', (req, res) => {
  var status = req.body.status;
  //producer.send([{
  //  topic: 'status',
  //  messages: status
  //}], (err, data) => {
  //  console.log(err);
  //  console.log(data);
  //});
  console.log(status);
  io.emit('status', status);
});

// Send everything else over to index.html. Let the client decide.
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('src/client/index.html'));
});

// Dokku/heroku default port for NodeJS is 5000.
server.listen(5000);