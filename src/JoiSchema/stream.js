import Joi from "joi";

// Define the Joi schema for validating `time` and `userId`
const stream = Joi.object({
    User_Id: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)  // Validates MongoDB ObjectId format
        .required(),
    time: Joi.date().required(),
});
export default stream;
