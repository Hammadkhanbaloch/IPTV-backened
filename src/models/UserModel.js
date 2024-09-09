import mongoose from "mongoose";
const schema= new mongoose.Schema(
   {
    name:
    {
        type:String,
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