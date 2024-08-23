
import express from "express";
import streammodel from "../models/Stream.js";
import episode from "../models/Episode.js";
import user from "../models/UserModel.js";
import mongoose from "mongoose";
import { httpResponse } from "../utils/httpResponse.js";
export const createstream=async(req,res)=>
    {
        try
        {
        const stream=await streammodel.insertMany(req.body);
        return httpResponse.CREATED(res, stream);
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getstream=async(req,res)=>
    {
    try
    {
    const streams=await streammodel.find();
    return httpResponse.SUCCESS(res, streams);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getstreamById=async(req,res)=>
{
    try
    {
        const stream=await streammodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, stream);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getepisodeBystreamId=async(req,res)=>
    {
        try
        {
            const streamid=req.params.id;
            const result=await episode.findOne({
                stream_id:new mongoose.Types.ObjectId(streamid),
            });
            return httpResponse.SUCCESS(res, result);
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
    export const getuserBystreamId=async(req,res)=>
        {
            try
            {
                const streamid=req.params.id;
                const result=await user.findOne({
                    stream_id:new mongoose.Types.ObjectId(streamid),
                });
                return httpResponse.SUCCESS(res, result);
            }catch({message})
            {
                return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
            }
        }

export const updatestreamById=async(req,res)=>
{
    try {
        const result = await streammodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletestream=async (req, res) => {
    try {
        const result = await streammodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletestreamById=async (req,res)=>
{
    try
    {
        const result=streammodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};