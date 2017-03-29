var mongoose = require('mongoose');

//create the schema
var booksSchema = mongoose.Schema({
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
var Book = module.exports = mongoose.models('Book', booksSchema);

// get Genres 
module.exports = getBook = function(callback, limit){
    Book.find(callback).limit(limit);
} 