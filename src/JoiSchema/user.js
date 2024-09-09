import joi from "joi";
const userschema=joi.object(
    {
        name:joi.string().min(3).max(20),
        email:joi.string().email().required(),
        password:joi.string().min(8).required()
    }
);
export default userschema;
