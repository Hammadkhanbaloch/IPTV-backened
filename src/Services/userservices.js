import express from "express";
import usermodel from "../models/UserModel.js";
export const createuser=async(req,res)=>
    {
        try
        {
        const user=await usermodel.create(req.body);
        res.status(200).json(user);
        }catch({message})
        {
            res.status(400).json({message});
        }
    }
export const getuser=async(req,res)=>
    {
    try
    {
    const users=await usermodel.find();
    res.status(200).json(users);
    }catch({message})
    {
        res.status(400).json({message});
    }
}
export const getuserById=async(req,res)=>
{
    try
    {
        const user=await usermodel.findById(req.query.id);
        res.status(200).json(user);
    }catch({message})
    {
        res.status(400).json({message});
    }
}

export const updateuserById=async(req,res)=>
{
    try {
        const result = await usermodel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deleteuser=async (req, res) => {
    try {
        const result = await usermodel.deleteMany();
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
};
export const deleteuserById=async (req,res)=>
{
    try
    {
        const result=usermodel.findByIdAndDelete(req.query.id);
        res.status(200).json(result);
    }
    catch({message})
    {
        res.status(400).json({message});
    }
};