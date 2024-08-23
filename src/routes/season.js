import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/seasonvalidation.js";
import {
    createseason,
    getseason,
    getseasonById,
    getepisodeByseasonId,
    updateseasonById,
    deleteseason,
    deleteseasonById
} from "../Services/seasonServices.js";
data.post("/",validation,createseason);
data.get("/",authentication,getseason);
data.get("/:id",authentication,getseasonById);
data.get("/:id/episode",authentication,getepisodeByseasonId);
data.patch("/",validation,updateseasonById);
data.delete("/",authentication,deleteseason);
data.delete("/:id",authentication,deleteseasonById);
export default data;