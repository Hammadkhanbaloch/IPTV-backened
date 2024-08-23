import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/filevalidation.js";
import {
    createfile,
    getfile,
    getfileById,
    updatefileById,
    deletefile,
    deletefileById
} from "../Services/fileServices.js";
data.post("/",validation,createfile);
data.get("/",authentication,validation,getfile);
data.get("/:id",authentication,validation,getfileById);
data.patch("/",validation,updatefileById);
data.delete("/",authentication,validation,deletefile);
data.delete("/:id",authentication,validation,deletefileById);
export default data;