//Use the Node module 'Express'
var express = require('express');
//Define variable app to use methods of the Express function
var app = express();
//express.static is built-in middleware to server static files, 'public' is the name of the directory
//that holds the files to published
app.use(express.static('public'));

//define port -Heroku will get random port each time app is run
//when running locally, 'npm start' will use .env file (if available), otherwise will default to 3000
var port = process.env.PORT || 3000;
//the listen method binds and listens for connections on the specified host and port
app.listen(port, function() {
    console.log('app listening on port ' + port);
});

//Routes HTTP GET requests to the specified path with the specified callback functions
//here '*' is the path we want to get, which is a catch-all route
//since we have a single page application (SPA) architecture, we are using Angular
//to do the routing and we just need the Express server to have a single entry point into the
//application, which is through the index.html file
app.get('*', function(req, res) {
    //__dirname is a special word to access the local file + public/index.html is the
    //directory for the published files
    //the sendFile method transfers the file that is the single point of entry
    //Transfers the file at the given path.
    res.sendFile(__dirname + "/public/index.html");
});
