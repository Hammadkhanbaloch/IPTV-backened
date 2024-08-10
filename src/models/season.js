import mongoose from "mongoose";
const schema= new mongoose.Schema(
   {
    first_name:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    last_name:
    {
        type:String,
        unique:true,
        trim:true
    },
    email:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:
    {
        type:String,
        required:true,
        trim:true
    }
   }
);
const user=mongoose.model("User",schema);
export default user;