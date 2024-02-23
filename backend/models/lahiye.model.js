const mongoose=require("mongoose")

const Tecnik=mongoose.model("Tecnik", new mongoose.Schema({
    image:{type:String},
    name:{type:String,},
    catagory:[{type:String}],
    brand:{type:String},
    endirim:{type:Number},
    satis:{type:Number}

}))

module.exports=Tecnik