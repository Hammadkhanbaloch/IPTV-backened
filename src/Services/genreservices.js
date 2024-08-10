
import express from "express";
import genremodel from "../models/GenreModel.js";
export const creategenre=async(req,res)=>
    {
        try
        {
        const genre=await genremodel.create(req.body);
        res.status(200).json(genre);
        }catch({message})
        {
            res.status(400).json({message});
        }
    }
export const getgenre=async(req,res)=>
    {
    try
    {
    const genres=await genremodel.find();
    res.status(200).json(genres);
    }catch({message})
    {
        res.status(400).json({message});
    }
}
export const getgenreById=async(req,res)=>
{
    try
    {
        const genre=await genremodel.findById(req.params.id);
        res.status(200).json(genre);
    }catch({message})
    {
        res.status(400).json({message});
    }
}

export const updategenreById=async(req,res)=>
{
    try {
        const result = await genremodel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletegenre=async (req, res) => {
    try {
        const result = await genremodel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deletegenreById=async (req,res)=>
{
    try
    {
        const result=genremodel.findByIdAndDelete(req.params.id);
        res.status(200).json(result);
    }
    catch({message})
    {
        res.status(400).json({message});
    }
};