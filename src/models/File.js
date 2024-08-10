import mongoose from "mongoose";
const schema= new mongoose.Schema(
   {
    original_name:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    current_name:
    {
        type:String,
        unique:true,
        trim:true
    },
    path:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    type:
    {
        type:String,
        required:true,
        trim:true
    },
    size:
    {
        type:String,
        required:true,
        trim:true
    }
   }
);
const file=mongoose.model("File",schema);
export default file;