const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/Mealsontime');
const Schema = mongoose.Schema;

const NewChefresSchema = new Schema({
    roomnumber : String,
    foodname : String,
    quantity : String,
    servedin : String,
    date: { type: Date, default: Date.now}
    
});

var Chefresdata = mongoose.model('chefresdata', NewChefresSchema);                       
module.exports = Chefresdata;