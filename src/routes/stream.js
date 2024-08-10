import express from "express";
const data=express.Router();
import validation from "../MiddlewareValidation/streamvalidation.js";
import {
    createstream,
    getstream,
    getstreamById,
    updatestreamById,
    deletestream,
    deletestreamById
} from "../Services/streamServices.js";
data.post("/",validation,createstream);
data.get("/",validation,getstream);
data.get("/:id",validation,getstreamById);
data.patch("/",validation,updatestreamById);
data.delete("/",validation,deletestream);
data.delete("/:id",validation,deletestreamById);
export default data;