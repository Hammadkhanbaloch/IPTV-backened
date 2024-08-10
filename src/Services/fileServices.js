
import express from "express";
import filemodel from "../models/File.js";
export const createfile=async(req,res)=>
    {
        try
        {
        const file=await filemodel.create(req.body);
        res.status(200).json(file);
        }catch({message})
        {
            res.status(400).json({message});
        }
    }
export const getfile=async(req,res)=>
    {
    try
    {
    const files=await filemodel.find();
    res.status(200).json(files);
    }catch({message})
    {
        res.status(400).json({message});
    }
}
export const getfileById=async(req,res)=>
{
    try
    {
        const file=await filemodel.findById(req.params.id);
        res.status(200).json(file);
    }catch({message})
    {
        res.status(400).json({message});
    }
}

export const updatefileById=async(req,res)=>
{
    try {
        const result = await filemodel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletefile=async (req, res) => {
    try {
        const result = await filemodel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletefileById=async (req,res)=>
{
    try
    {
        const result=filemodel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    }
    catch({message})
    {
        res.status(400).json({message});
    }
};