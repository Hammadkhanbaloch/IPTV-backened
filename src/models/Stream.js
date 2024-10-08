import joi from "joi";
import mongoose from "mongoose";
const schema= new mongoose.Schema(
   {
    User_Id:
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User" ,
        trim:true
    },
    episode_id:
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref:"Episode" ,
        trim:true
    },
    time: {
        type: Date,
        default: Date.now, // Sets the default to the current date and time
        required: true
   }
}
);
const stream=mongoose.model("Stream",schema);
export default stream;