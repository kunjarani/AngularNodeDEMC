var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);

var Schema = mongoose.Schema;

var usersSchema = new Schema({
    id: String,
    num1: String , 
    num2: String,
    multiply: String
});

var user = mongoose.model('user',usersSchema);

module.exports = user;