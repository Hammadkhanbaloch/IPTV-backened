import express from "express";
const data=express.Router();
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
data.get("/",validation,getfile);
data.get("/:id",validation,getfileById);
data.patch("/",validation,updatefileById);
data.delete("/",validation,deletefile);
data.delete("/:id",validation,deletefileById);
export default data;