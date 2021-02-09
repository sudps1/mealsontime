const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');

// mongoose.connect('mongodb://localhost:27017/Mealsontime');
const Schema = mongoose.Schema;

const NewChefSchema = new Schema({
    fullname : String,
    chefid : String,
    email : String,
    mobno : String,   
    password : String,
    confirmpassword : String

});

var Chefdata = mongoose.model('chefdata', NewChefSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Chefdata;