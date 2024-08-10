import userschema from "../JoiSchema/user.js";
import joi from "joi";
const validation=(req,res,next)=>
{
    const {error}=userschema.validate(req.body);
    if(error)
    {
        res.status(400).json({error:error.details[0].message});
    }
    next();
};
export default validation;