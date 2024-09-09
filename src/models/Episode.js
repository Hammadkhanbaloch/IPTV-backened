
import mongoose from "mongoose";
const schema= new mongoose.Schema(
   {
    name:
    {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    description:
    {
        type:String,
        unique:true,
        trim:true
    },
    file_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"File",
    },
    stream_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Stream",
    },
    season_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Season",
    }
   }
);
const episode=mongoose.model("Episode",schema);
export default episode;