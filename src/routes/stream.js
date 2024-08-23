import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/streamvalidation.js";
import {
    createstream,
    getstream,
    getstreamById,
    getepisodeBystreamId,
    getuserBystreamId,
    updatestreamById,
    deletestream,
    deletestreamById
} from "../Services/streamServices.js";
data.post("/",validation,createstream);
data.get("/",authentication,validation,getstream);
data.get("/:id",authentication,validation,getstreamById);
data.get("/:id/episode",authentication,validation,getepisodeBystreamId);
data.get("/:id/user",authentication,validation,getuserBystreamId);
data.patch("/",validation,updatestreamById);
data.delete("/",authentication,validation,deletestream);
data.delete("/:id",authentication,validation,deletestreamById);
export default data;