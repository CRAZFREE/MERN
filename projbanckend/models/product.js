const mongoose = require("mongoose");
const {ObjectId}=mongoose.Schema;


const productSchema = mongoose.Schema;

const  = new productSchema({
  name: {
    type: String,
    required: true,
    trim:true,
    maxlenght:32
  } ,
  description:{
    type: String,
    required: true,
    trim:true,
    maxlenght:200
  },
  price{
    type: Number,
    required: true,
    trim:true,
    maxlenght:32
  },
  category:{
      type:ObjectId,
      ref:"Category",
      required:true
  },
  stock{
      type:Number
  },
  sold:{
      type:Number,
      default:0
  },
  photo:{
      data:Buffer,
      contentType:String
  }
},{timestamps:true}
);

module.exports =  = mongoose.model("Product",productSchema );