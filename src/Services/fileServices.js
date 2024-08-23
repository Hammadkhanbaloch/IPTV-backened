
import express from "express";
import filemodel from "../models/File.js";
import { httpResponse } from "../utils/httpResponse.js";
export const createfile=async(req,res)=>
    {
        try
        {
        const file=await filemodel.insertMany(req.body);
        return httpResponse.CREATED(res, file)
        }catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    }
export const getfile=async(req,res)=>
    {
    try
    {
    const files=await filemodel.find();
    return httpResponse.SUCCESS(res, files);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getfileById=async(req,res)=>
{
    try
    {
        const file=await filemodel.findById(req.params.id);
        return httpResponse.SUCCESS(res, file);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}

export const updatefileById=async(req,res)=>
{
    try {
        const result = await filemodel.findByIdAndUpdate(req.params.id, req.body);
        return httpResponse.CREATED(res, result)
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletefile=async (req, res) => {
    try {
        const result = await filemodel.deleteMany();
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletefileById=async (req,res)=>
{
    try
    {
        const result=filemodel.findByIdAndDelete(req.params.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};