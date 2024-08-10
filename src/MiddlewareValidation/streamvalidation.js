import joi from "joi";
import streamschema from "../JoiSchema/stream.js";
const validation=(req,res,next)=>
{
    const {error}=streamschema.validate(req.body);
    if(error)
    {
        res.status(400).json({error:error.details[0].message});
    }
    next();
};
export default validation;