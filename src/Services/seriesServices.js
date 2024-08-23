import seriesmodel from "../models/Series.js";
import season from "../models/season.js";
import mongoose from "mongoose";
import { httpResponse } from "../utils/httpResponse.js";
export const createseries=async(req,res)=>
    {
        try
        {
        const series=await seriesmodel.insertMany(req.body);
        return httpResponse.CREATED(res, series);
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getseries=async(req,res)=>
    {
    try
    {
    const seriess=await seriesmodel.find();
    return httpResponse.SUCCESS(res, seriess);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getseriesById=async(req,res)=>
{
    try
    {
        const series=await seriesmodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, series);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getseasonBySeriesId=async (req,res)=>
{
    const seriesid=req.params.id;
    try{

    
    const result= await season.findOne({
        series_id:new mongoose.Types.ObjectId(seriesid),
    })
    return httpResponse.SUCCESS(res, result);
}catch(error)
{
    return httpResponse.INTERNAL_SERVER_ERROR(res, error);
}
}
export const getepisodeByseasonById=async(req,res)=>
    {
        try{
            const seriesId=req.params.userId;
            const Season = await season.aggregate([
                {
                    $match: {
                        User_Id:new mongoose.Types.ObjectId(seriesId),
                    },
                },
                {
                    $lookup:
                    {
                        from:"episodes",
                        localField:"_id",
                        foreignField:"stream_id",
                        as:"episodes"
                    }
                }
            ]);
    
            if(!Season)
            {
                res.status(404).send("Not Found");
            }
            res.status(200).json(Stream)
            }
            catch(error){
                return httpResponse.INTERNAL_SERVER_ERROR(res, error);
            }
    }

export const updateseriesById=async(req,res)=>
{
    try {
        const result = await seriesmodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteseries=async (req, res) => {
    try {
        const result = await seriesmodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteseriesById=async (req,res)=>
{
    try
    {
        const result=seriesmodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};