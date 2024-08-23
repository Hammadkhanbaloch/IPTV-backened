import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/uservalidation.js";
import {
    createuser,
    createuser1,
    getuser,
    getuserById,
    getstreamByUserId,
    getstreamByUserIdAndStreamId,
    getepisodeBystreamById,
    updateuserById,
    deleteuser,
    deleteuserById,
    deletestreamByUserIdAndStreamId
} from "../Services/userservices.js";
data.post("/register",validation,createuser);
data.post("/login",validation,createuser1);
data.get("/",authentication,validation,getuser);
data.get("/:id",validation,getuserById);
data.get("/:id/stream",validation,getstreamByUserId);
data.get("/:userId/stream/:streamId",validation,getstreamByUserIdAndStreamId);
data.get("/:userId/stream/episode",validation,getepisodeBystreamById);
data.patch("/",validation,updateuserById);
data.delete("/",authentication,validation,deleteuser);
data.delete("/:id",authentication,validation,deleteuserById);
data.delete("/:userId/stream/:streamId",authentication,validation,deletestreamByUserIdAndStreamId);
export default data;