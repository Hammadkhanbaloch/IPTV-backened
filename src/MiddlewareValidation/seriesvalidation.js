import seriesschema from "../JoiSchema/series.js";

const validation = (req, res, next) => {
    const { error } = seriesschema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export default validation;
