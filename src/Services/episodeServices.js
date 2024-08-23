import episodemodel from "../models/Episode.js";
import stream from "../models/Stream.js";
import mongoose from "mongoose";
import { httpResponse } from "../utils/httpResponse.js";
export const createepisode=async(req,res)=>
    {
        try
        {
        const episode=await episodemodel.insertMany(req.body);
        return httpResponse.CREATED(res, episode)
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getepisode=async(req,res)=>
    {
    try
    {
    const episodes=await episodemodel.find();
    return httpResponse.SUCCESS(res, episodes);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getepisodeById=async(req,res)=>
{
    try
    {
        const episode=await episodemodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, episode);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getstreamByEpisodeId=async()=>
{
 try{
    const episodeid=req.params.id;
    const result=await stream.findOne(
        {
            episode_id:new mongoose.Types.ObjectId(episodeid)
        })
        return httpResponse.SUCCESS(res, result);
 }catch({message})
 {
    return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
 }
}
export const updateepisodeById=async(req,res)=>
{
    try {
        const result = await episodemodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result)
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteepisode=async (req, res) => {
    try {
        const result = await episodemodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteepisodeById=async (req,res)=>
{
    try
    {
        const result=episodemodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};