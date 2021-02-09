const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://usertwo:usertwo@casestudysudeep.46g81.mongodb.net/libraryapp?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/Mealsontime');
const Schema = mongoose.Schema;

const NewOrderSchema = new Schema({
    email : String,
    id : String,
    diabetes : String,
    hypertension : String, 
    emergency : String,
    quantity : Number, 
    message : String,
    status : Boolean

});

var Orderdata = mongoose.model('orderdata', NewOrderSchema);                        //UserData is the model and NewBookData is the schema

module.exports = Orderdata;