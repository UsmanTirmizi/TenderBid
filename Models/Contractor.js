const { isNumber } = require("@hapi/joi/lib/common");
const mongoose = require("mongoose")

//Schema
const contractorSchema = {
    ct_ID:mongoose.Schema.Types.ObjectId,
    Name:{
        type: String, 
        required: true
    },
    CompanyName:{
        type: String, 
        required: true
    },
    Email:{ 
        type: String, 
        required: true, 
        unique: true
    },    
    Address:{
        type: String, 
        required: true
    },
    MobileNo:{
        type: Number, 
        required: true
    },
    password:{
        type:String, 
        required:true
    },
    status:{
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        required: true
    }
}

module.exports = mongoose.model("contractors", contractorSchema);