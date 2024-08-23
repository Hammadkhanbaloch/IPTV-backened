import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/seriesvalidation.js";
import {
    createseries,
    getseries,
    getseriesById,
    getseasonBySeriesId,
    getepisodeByseasonById,
    updateseriesById,
    deleteseries,
    deleteseriesById
} from "../Services/seriesServices.js";
data.post("/",validation,createseries);
data.get("/",authentication,getseries);
data.get("/:id",authentication,getseriesById);
data.get("/:id/season",authentication,getseasonBySeriesId);
data.get("/:id/season/episode",authentication,getepisodeByseasonById);
data.patch("/",validation,updateseriesById);
data.delete("/",authentication,validation,deleteseries);
data.delete("/:id",authentication,validation,deleteseriesById);
export default data;