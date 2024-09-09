import express from "express";
import mongoose from "mongoose";
import usermodel from "../models/UserModel.js";
import passwordHash from "password-hash";
import stream from "../models/Stream.js";
import jwt from "jsonwebtoken";
import { httpResponse } from "../utils/httpResponse.js";
export const createuser = async (req, res) => {
    try {
      // Hash the user's password before saving
      req.body.password = passwordHash.generate(req.body.password);
      const user = await usermodel.create(req.body); // Corrected to use create instead of insertMany
      return httpResponse.CREATED(res, user);
    } catch ({ message }) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, { message });
    }
  };
  
  // Login endpoint
  export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await usermodel.findOne({ email });
  
      if (!user) {
        return res.status(401).send("Invalid email or password");
      }
  
      // Verify the password
      const isPasswordValid = passwordHash.verify(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send("Invalid email or password");
      }
  
      // Generate a JWT token
      const token = jwt.sign({ id: user._id }, "my_secret", { expiresIn: "1h" });
      res.json({ token, user });
    } catch ({ message }) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, { message });
    }
  };
  
  // Example of a protected route using the existing authentication middleware
  export const getProtectedData = async (req, res) => {
    try {
      res.json({ message: "You have access to this protected route" });
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, { message: error.message });
    }
  };
export const getuser=async(req,res)=>
    {
    try
    {
        const filter={};
        const sort={};
        const select={};
        Object.keys(req.query).forEach((key)=>
        {
            if(key=="sort")
            {
                if(typeof req.query.sort=="object")
                {
                    req.query.sort.forEach((sortValue)=>
                    {
                        sort[sortValue.replace("-","")]=sortValue.startsWith("")?-1:1;
                    })
                }
                else
                {
                    sort[req.query.sort.replace("-","")]=req.query.sort.startsWith("-")?-1:1;
                }
            }
            else if(key=="select")
                {
                    if(typeof req.query.select=="object")
                    {
                        req.query.select.forEach((selectValue)=>
                        {
                            select[selectValue.replace("-","")]=selectValue.startsWith("")?0:1;
                        })
                    }
                    else
                    {
                        select[req.query.select.replace("-","")]=req.query.select.startsWith("-")?-0:1;
                    }
                }
            else if (key === "search") {
                if (typeof req.query.search === "object") {
                  filter.$or = req.query.search.map((searchValue) => {
                    return {
                      name: {
                        $regex: searchValue,
                        $options: "i",
                      },
                    };
                  });
                } else {
                  filter.name = {
                    $regex: req.query.search,
                    $options: "i",
                  };
                }
              } else {
                if (typeof req.query[key] === "object") {
                  objectKeys(req.query[key]).forEach((operator) => {
                    filter[key] = {
                      ...filter[key],
                      [`$${operator}`]: req.query[key][operator],
                    };
                  });
                } else {
                  filter[key] = req.query[key];
                }
              }
            });
          
            const result = await usermodel.find(filter).sort(sort).select(select);
    return httpResponse.SUCCESS(res, result);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getuserById=async(req,res)=>
{
    try
    {
        const user=await usermodel.findById(req.params.id);
        
        return httpResponse.SUCCESS(res, user);
    }catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
}
export const getstreamByUserId = async (req, res) => {
    try {
        const userId = req.params.id;
        const streams = await stream.aggregate([
            {
                $match: {
                    User_Id:new mongoose.Types.ObjectId(userId), 
                },
            },
        ]);
        return httpResponse.SUCCESS(res, streams);
    } catch (error) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
};
export const getstreamByUserIdAndStreamId=async(req,res)=>
{
    try{
        const userId=req.params.userId;
        const streamId=req.params.streamId;
        const Stream = await stream.aggregate([
            {
                $match: {
                    User_Id:new mongoose.Types.ObjectId(userId),
                    _id:new mongoose.Types.ObjectId(streamId), 
                },
            },
        ]);

        if(!Stream)
        {
            res.status(404).send("Not Found");
        }
        res.status(200).json(Stream)
        }
        catch(error){
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
}
export const getepisodeBystreamById=async(req,res)=>
    {
        try{
            const userId=req.params.id;
            const Stream = await stream.aggregate([
                {
                    $match: {
                        User_Id:new mongoose.Types.ObjectId(userId),
                    },
                },
                {
                    $lookup:
                    {
                        from:"episodes",
                        foreignField:"_id",
                        localField:"episode_id",
                        as:"episodes"
                    }
                }
            ]);
    
            if(!Stream)
            {
                res.status(404).send("Not Found");
            }
            res.status(200).json(Stream)
            }
            catch(error){
                return httpResponse.INTERNAL_SERVER_ERROR(res, error);
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
        return httpResponse.SUCCESS(res, result);
    } catch ({ message }) {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deleteuserById=async (req,res)=>
{
    try
    {
        const result=usermodel.findByIdAndDelete(req.query.id);
        return httpResponse.SUCCESS(res, result);
    }
    catch({message})
    {
        return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
    }
};
export const deletestreamByUserIdAndStreamId=async (req,res)=>
    {
        try
        {
            const userId=req.params.userId;
            const streamId=req.params.streamId;
            const result= await stream.findByIdAndDelete(
                {
                    User_Id:new mongoose.Types.ObjectId(userId),
                    _id:new mongoose.Types.ObjectId(streamId),
                });
                return httpResponse.SUCCESS(res, result);
        }
        catch({message})
        {
            return httpResponse.INTERNAL_SERVER_ERROR(res, {message});
        }
    };