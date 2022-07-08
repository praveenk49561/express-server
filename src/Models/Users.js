const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserShema = new Schema({
    name: { type: String, required: true },
    empId: { type: String, required: true },
    emailId: { type: String, required: true },
    mobileNo: { type: Number, required: true },
    password: { type: String, required: true }, 
});

// mongoose.model will create a User Model from the give schema.
module.exports = mongoose.model('User', UserShema);