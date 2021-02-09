const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/Mealsontime');
const Schema = mongoose.Schema;

const NewFoodSchema = new Schema({
    foodname : String,
    price : String,
    cuisine : String,
    description : String,
    url:String
    
});

var Fooddata = mongoose.model('fooddata', NewFoodSchema);                       
module.exports = Fooddata;