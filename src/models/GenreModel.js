import mongoose from "mongoose";
const schema=new mongoose.Schema(
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
            trim:true
        }
    }
);
const genre=mongoose.model("Genre",schema);
export default genre;