import joi from "joi";
const fileschema=joi.object(
    {
        original_name:joi.string().min(3).max(20).required(),
        current_name:joi.string().min(3).max(20),
        path:joi.string().min(5).required(),
        size:joi.string().min(8).required(),
        type:joi.string().min(5).required()
    }
);
export default fileschema;