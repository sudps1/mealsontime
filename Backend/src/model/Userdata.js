const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/Mealsontime');
const Schema = mongoose.Schema;

const NewUserSchema = new Schema({
    fullname : String,
    roomnumber : Number,
    email : String,
    mobno : String, 
    password : String
});

var Userdata = mongoose.model('userdata', NewUserSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Userdata;