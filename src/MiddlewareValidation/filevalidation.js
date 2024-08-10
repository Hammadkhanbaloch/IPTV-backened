import joi from "joi";
import fileschema from "../JoiSchema/file.js";
const validation=(req,res,next)=>
{
    const {error}=fileschema.validate(req.body);
    if(error)
    {
        res.status(400).json({error:error.details[0].message});
    }
    next();
};
export default validation;