import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/genrevalidation.js";
import {
    creategenre,
    getgenre,
    getgenreById,
    getSeriesByGenreId,
    getseasonByseriesBygenreId,
    updategenreById,
    deletegenre,
    deletegenreById
} from "../Services/genreservices.js";
data.post("/",validation,creategenre);
data.get("/",authentication,validation,getgenre);
data.get("/:id",authentication,validation,getgenreById);
data.get("/:id/series",authentication,validation,getSeriesByGenreId);
data.get("/:id/series/season",authentication,validation,getseasonByseriesBygenreId);
data.patch("/",validation,updategenreById);
data.delete("/",authentication,validation,deletegenre);
data.delete("/:id",authentication,validation,deletegenreById);
export default data;