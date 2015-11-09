var express = require('express'),
  app = express();

var conf = {
  port: 8888
};

// index
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname })
});

var server = app.listen(conf.port, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('App is up and running on http://%s:%s', host, port);
});
