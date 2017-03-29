var express = require('express');
var app = express();
var bodyPaser = require('body-parser');
var mongoose = require('mongoose');

// Include our models
Genre = require('./models/genre');

//connect to mongoose 
mongoose.connect = ('mongodb://@ds145380.mlab.com:45380/bookstore');
var db = mongoose.connection;

//set up the route for the homepage.
app.get('/', function(req,res){
    res.send('Please use /api/books or /api/genres')

});

//set up the /api/genres route
app.get('/api/genres', function(req,res){
    //allows us to access the Genre object and all its function 
    Genre.getGenre(function(err,genres){
        // If there is an error it should throw the error else it should pass the genres 
        if (err){
            throw err;
        }
        res.json(genres);
        
    });
});

//Define the port the application will listen from
app.listen(3000);
//create logs so as to know the app is connected.
console.log('Running on port 3000')

