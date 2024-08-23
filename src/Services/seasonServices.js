import seasonmodel from "../models/season.js";
import mongoose from"mongoose";
import episode from "../models/Episode.js";
import { httpResponse } from "../utils/httpResponse.js";
export const createseason=async(req,res)=>
    {
        try
        {
        const season=await seasonmodel.insertMany(req.body);
        return httpResponse.CREATED(res, season)
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getseason=async(req,res)=>
    {
    try
    {
    const seasons=await seasonmodel.find();
    return httpResponse.SUCCESS(res,seasons);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getseasonById=async(req,res)=>
{
    try
    {
        const season=await seasonmodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, season);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getepisodeByseasonId=async(req,res)=>
    {
        try
        {
            const seasonid=req.params.id;
            const result=await episode.findone({
                season_id:new mongoose.Types.ObjectId(seasonid),
            });
            return httpResponse.SUCCESS(res, result);
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const updateseasonById=async(req,res)=>
{
    try {
        const result = await seasonmodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result)
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteseason=async (req, res) => {
    try {
        const result = await seasonmodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteseasonById=async (req,res)=>
{
    try
    {
        const result=seasonmodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};