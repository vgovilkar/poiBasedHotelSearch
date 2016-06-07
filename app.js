var express = require('express');
var app = express();
var request = require('request');
var events = require('events');
var sequence = require('sequence').Sequence.create(),
    err

app.use(express.static('public'));

app.get('/hello', function(req, res) {
    res.send('Hello World!');
});

app.get('/actsearch/:name', function(req, res) {
    var responseBody = [];
    console.log(req.params.name);
    request({
      url: 'http://localhost:8080/absearch/' + req.params.name,
      method: 'GET'
  },function(error, response, body){
          res.send(body);
  });
});

app.get('/hotelSearch/:name', function(req, res) {
    var responseBody = [];
    console.log(req.params.name);
    request({
      url: 'http://localhost:8080/absearch/gethotels/Chicago,%20IL,%20USA?activitieslatlongList=41.8781136,-87.6297982%7C41.8988153,-87.6229786%7C41.8817767,-87.6371461&checkInDate=2016-12-01&checkOutDate=2016-12-03',
      method: 'GET'
  },function(error, response, body){
          res.send(body);
  });
});


var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
