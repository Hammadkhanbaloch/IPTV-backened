import joi from "joi";
import genreschema from "../JoiSchema/genre.js";
const validation=(req,res,next)=>
{
    const {error}=genreschema.validate(req.body);
    if(error)
    {
        res.status(400).json({error:error.details[0].message});
    }
    next();
};
export default validation;