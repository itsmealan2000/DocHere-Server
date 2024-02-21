const mongoose = require('mongoose');
const pharmacySchema = new mongoose.Schema({
    medicinename:{
        type:String,
        required:true,
        unique:true
    },
    Price:{
        type:Number,
        required:true
    },
    stock:{
        type:String,
        required:true
    }
})
const medicine = mongoose.model('medicine', pharmacySchema)
module.exports = medicine