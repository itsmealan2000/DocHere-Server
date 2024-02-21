const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    docname:{
        type:String,
        required:true
    },
    speciality:{
        type:String,
        required:true
    },
    available:{
        type:String,
        required:true
    }
})
const doctor = mongoose.model('doctor', doctorSchema)
module.exports = doctor