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
//    console.log(req.params.name);
    request({
      url: 'http://localhost:8080/absearch/' + req.params.name,
      method: 'GET'
  },function(error, response, body){
          res.send(body);
  });
});

app.get('/hotelSearch/*', function(req, res) {
    console.log(req.query.city);
    console.log(req.query.latlonglist);
    console.log(req.query.checkin);
    console.log(req.query.checkout);
    var requrl = 'http://localhost:8080/absearch/gethotels/'+req.query.city+
    '?activitieslatlongList=' + req.query.latlonglist + '&checkInDate=' +req.query.checkin +
    '&checkOutDate=' + req.query.checkout;
    console.log(requrl);
    request({
      url: requrl,
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
