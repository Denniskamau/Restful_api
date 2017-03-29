var mongoose = require('mongoose');

//create the schema
var genreSchema = mongoose.Schema({
    name:{
        type: String,
        required : true 
    },
    create_date:{
        type: Date,
        default: Date.now 
    }
})

//make the Genre object accessible from anywhere else
var Genre = module.exports = mongoose.model('Genre', genreSchema);

// get Genres 
module.exports = getGenre = function(callback, limit){
    Genre.find(callback).limit(limit);
} 