
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
    series_id:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Series",
        required:true
    }
   }
);
const season=mongoose.model("Season",schema);
export default season;