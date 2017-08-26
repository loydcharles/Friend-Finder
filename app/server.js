var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express();

var PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
	res.send('Hello world');
});

app.listen(3000);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

/*
app.use(function(req, res) {
	res.setHeader('Content-Type', 'text/plain')
	res.write('you posted:\n')
	res.end(JSON.stringify(req.body, null, 2))
});
*/

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});