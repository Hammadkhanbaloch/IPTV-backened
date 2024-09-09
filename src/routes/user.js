import express from "express";
const data = express.Router();
import authentication from "../config/Authentication jwt.js"; // Import the authentication middleware
import validation from "../MiddlewareValidation/uservalidation.js";
import {
  createuser,
  login,
  getuser,
  getuserById,
  getstreamByUserId,
  getstreamByUserIdAndStreamId,
  getepisodeBystreamById,
  updateuserById,
  deleteuser,
  deleteuserById,
  deletestreamByUserIdAndStreamId,
  getProtectedData, // Import the protected route
} from "../Services/userservices.js";

data.post("/register",validation, createuser);
data.post("/login",validation, login);
data.get("/", authentication, validation, getuser);
data.get("/:id", authentication, validation, getuserById);
data.get("/:id/stream", authentication, validation, getstreamByUserId);
data.get("/:userId/stream/:streamId", authentication, validation, getstreamByUserIdAndStreamId);
data.get("/:id/stream/episode", authentication, validation, getepisodeBystreamById);
data.patch("/:id", authentication, validation, updateuserById);
data.delete("/", validation, deleteuser);
data.delete("/:id", authentication, validation, deleteuserById);
data.delete("/:userId/stream/:streamId", authentication, validation, deletestreamByUserIdAndStreamId);
data.get("/protected", authentication, getProtectedData);

export default data;
