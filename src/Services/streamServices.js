
import express from "express";
import streammodel from "../models/Stream.js";
export const createstream=async(req,res)=>
    {
        try
        {
        const stream=await streammodel.create(req.body);
        res.status(200).json(stream);
        }catch({message})
        {
            res.status(400).json({message});
        }
    }
export const getstream=async(req,res)=>
    {
    try
    {
    const streams=await streammodel.find();
    res.status(200).json(streams);
    }catch({message})
    {
        res.status(400).json({message});
    }
}
export const getstreamById=async(req,res)=>
{
    try
    {
        const stream=await streammodel.findById(req.params.id);
        res.status(200).json(stream);
    }catch({message})
    {
        res.status(400).json({message});
    }
}

export const updatestreamById=async(req,res)=>
{
    try {
        const result = await streammodel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletestream=async (req, res) => {
    try {
        const result = await streammodel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletestreamById=async (req,res)=>
{
    try
    {
        const result=streammodel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    }
    catch({message})
    {
        res.status(400).json({message});
    }
};