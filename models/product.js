const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type: Number,
        required : true , 
        min : 0,
    },
    category:{
        type:String,
        lowercase:true,
        enum: ['fruit','vegetable','dairy']
    }
})



const product = mongoose.model('product',productschema)
module.exports = product