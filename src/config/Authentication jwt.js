import jwt from "jsonwebtoken";
const authentication = (req, res, next) => {
    const token = req.header("authorization");
    if (!token) {
        return res.status(400).send("No Access, No token provided");
    }
    const bearertoken = token.split(" ")[1];
    try {
        const decoded = jwt.verify(bearertoken, "my_secret");
        console.log("Decoded Token:", decoded); 
        req.user = decoded;
        next();
    } catch (err) {
        console.error("Token verification failed:", err); 
        res.status(401).send("Invalid Token, No Access, please try again later");
    }
};
export default authentication;
