import joi from "joi";
const genreschema=joi.object(
    {
        name:joi.string().min(4).max(20).required(),
        description:joi.string().min(5).max(50)
    }
);
export default genreschema;