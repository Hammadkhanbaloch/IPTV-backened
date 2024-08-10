import express from "express";
const data=express.Router();
import validation from "../MiddlewareValidation/uservalidation.js";
import {
    createuser,
    getuser,
    getuserById,
    updateuserById,
    deleteuser,
    deleteuserById
} from "../Services/userservices.js";
data.post("/",validation,createuser);
data.get("/",validation,getuser);
data.get("/:id",validation,getuserById);
data.patch("/",validation,updateuserById);
data.delete("/",validation,deleteuser);
data.delete("/:id",validation,deleteuserById);
export default data;