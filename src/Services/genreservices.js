
import express from "express";
import mongoose from "mongoose";
import genremodel from "../models/GenreModel.js";
import Series from "../models/Series.js";
import season from "../models/season.js";
import { httpResponse } from "../utils/httpResponse.js";
export const creategenre=async(req,res)=>
    {
        try
        {
        const genre=await genremodel.insertMany(req.body);
        return httpResponse.CREATED(res, genre)
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getgenre=async(req,res)=>
    {
    try
    {
    const genres=await genremodel.find();
    return httpResponse.SUCCESS(res, genres);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getgenreById=async(req,res)=>
{
    try
    {
        const genre=await genremodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, genre);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getSeriesByGenreId=async(req,res)=>
    {
        try
        {
            const genreId=req.params.id;
            const result=await Series.findById(
                {
                genre_id:new mongoose.Types.ObjectId(genreId),
                });
                return httpResponse.SUCCESS(res, result);
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
    export const getseasonByseriesBygenreId=async(req,res)=>
        {
            try{
                const genreId=req.params.userId;
                const Series = await Series.aggregate([
                    {
                        $match: {
                            User_Id:new mongoose.Types.ObjectId(genreId),
                        },
                    },
                    {
                        $lookup:
                        {
                            from:"seasons",
                            localField:"_id",
                            foreignField:"series_id",
                            as:"seasons"
                        }
                    }
                ]);
                if(!Series)
                {
                    res.status(404).send("Not Found");
                }
                res.status(200).json(Series)
                }
                catch(error){
                    return httpResponse.INTERNAL_SERVER_ERROR(res, error);
                }
        }
export const updategenreById=async(req,res)=>
{
    try {
        const result = await genremodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result)
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletegenre=async (req, res) => {
    try {
        const result = await genremodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletegenreById=async (req,res)=>
{
    try
    {
        const result=genremodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};