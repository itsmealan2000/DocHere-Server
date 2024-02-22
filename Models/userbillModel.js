const mongoose = require('mongoose');
const userBillSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    medicineName:[{
        type:String,
        required:true
    }],
    total:{
        type:String,
        required:true
    }
})
const userbill = mongoose.model('userbill', userBillSchema)
module.exports = userbill
