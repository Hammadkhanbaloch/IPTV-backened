import express from "express";
const data=express.Router();
import authentication from "../config/Authentication jwt.js";
import validation from "../MiddlewareValidation/episodevalidation.js";
import {
    createepisode,
    getepisode,
    getepisodeById,
    getstreamByEpisodeId,
    updateepisodeById,
    deleteepisode,
    deleteepisodeById
} from "../Services/episodeServices.js";
data.post("/",validation,createepisode);
data.get("/",authentication,getepisode);
data.get("/:id",authentication,getepisodeById);
data.get("/:id/stream",authentication,getstreamByEpisodeId);
data.patch("/",authentication,validation,updateepisodeById);
data.delete("/",authentication,deleteepisode);
data.delete("/:id",authentication,deleteepisodeById);
export default data;