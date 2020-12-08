const mongoose= require('../database');
const bcrypt = require('bcryptjs');

const taskSchema = new mongoose.Schema({
    title: {
    type:String,
    require:true,
},
project: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'project',
    require: true,

},

assignedTo:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    require:true,
},

completed: {

    type: Boolean,
    require: true,
    default: false,
},

createdAt:{
    type:Date,
    default:Date.now,
},


});


const task= mongoose.model('User', userSchema);

module.exports = User;
