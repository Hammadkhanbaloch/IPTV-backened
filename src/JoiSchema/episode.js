import joi from "joi";
const episode=joi.object({
    name:joi.string().min(3).max(20).required(),
    description:joi.string().min(5).max(50),
    file_id:joi.string().regex(/^[0-9a-fA-F]{24}$/),
    stream_id:joi.string().regex(/^[0-9a-fA-F]{24}$/),
    season_id:joi.string().regex(/^[0-9a-fA-F]{24}$/)
})
export default episode;