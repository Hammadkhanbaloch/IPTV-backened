
import mongoose from "mongoose";
import genre from "./GenreModel.js";
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
    genre_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Genre",
        trim:true
    },
    file_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"File",
        required:true
    }
   }
);
const series=mongoose.model("Series",schema);
export default series;