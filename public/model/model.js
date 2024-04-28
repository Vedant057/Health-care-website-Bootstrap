const mongoose = require('mongoose');

const testSchema  = new mongoose.Schema({
    name : {
        type : String,
        required : true,  
    },
    email : {
        type  : String,
        unique : true,
        required : true,
    },
    phone : {
        type : Number,
        unique : true,
        required : true,
    },
    gender : {
        type : String,
        required : true,  
    },
    age : {
        type : Number,
        required : true,
    },
    result : {
        type : String,
        required : true,  
    },
});

const testCollection  = new mongoose.model('testcollection', testSchema);

module.exports = testCollection;