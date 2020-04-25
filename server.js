var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

// var jsonParser = bodyParser.json()

app.use(express.urlencoded({extended: true}));

app.use(express.json({ type: 'application/**json' }))

app.use(express.raw({ type: 'application/vnd.custom-type '}))

app.use(express.text({ type: 'text/html' }))

//include API route
require('./app/routing/apiRoutes.js')(app);

//pass express (app) into module.exports function
require('./app/routing/htmlRoutes.js')(app);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});

