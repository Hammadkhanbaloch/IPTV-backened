import express from "express";
const data=express.Router();
import validation from "../MiddlewareValidation/genrevalidation.js";
import {
    creategenre,
    getgenre,
    getgenreById,
    updategenreById,
    deletegenre,
    deletegenreById
} from "../Services/genreservices.js";
data.post("/",validation,creategenre);
data.get("/",validation,getgenre);
data.get("/:id",validation,getgenreById);
data.patch("/",validation,updategenreById);
data.delete("/",validation,deletegenre);
data.delete("/:id",validation,deletegenreById);
export default data;