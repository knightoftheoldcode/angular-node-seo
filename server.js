// server.js

// set up ========================
var express = require('express');
var app = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

// configuration =================

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/app'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// application --
// app.get('*', function(req, res) {
// 	console.log('catch-all route:' );
// 	console.log('  ' + __dirname + '/app/index.html');
// 	res.sendFile(__dirname, '/app/index.html');
// 	console.log('  ended');
// });

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname + '/app' });
});

// listen (start app with node server.js) ======================================
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
