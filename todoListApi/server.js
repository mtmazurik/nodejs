var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Task = require('./todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('this connection string to Mongo Atlas occlude for safety', { useNewUrlParser: true }); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res) {                                        // express middleware to intercept bad REST URI and responde with 'friendly' message
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

var routes = require('./todoListRoutes'); //importing route
routes(app); //register the route
app.listen(port);

console.log('todo list RESTful API server started on: ' + port);