import express from "express";
import mongoose from "mongoose";
import Userdata from "./src/routes/user.js";
import filedata from "./src/routes/file.js";
import streamdata from "./src/routes/stream.js";
import genredata from "./src/routes/genre.js";
const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/IPTV_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use("/user", Userdata);
app.use("/genre", genredata);
app.use("/stream", streamdata);
app.use("/file",filedata)
app.listen(4444, () => { console.log("Server is running on 4444 port") });

