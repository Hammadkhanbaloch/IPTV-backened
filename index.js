import express from "express";
import mongoose from "mongoose";
import env from "./src/config/env.js"
const app = express();
app.use(express.json());
import Userdata from "./src/routes/user.js";
import filedata from "./src/routes/file.js";
import seriesdata from "./src/routes/series.js";
import seasondata from "./src/routes/season.js";
import episodedata from "./src/routes/episode.js";
import streamdata from "./src/routes/stream.js";
import genredata from "./src/routes/genre.js";
mongoose.connect(env.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.use("/user", Userdata);
app.use("/genre", genredata);
app.use("/stream", streamdata);
app.use("/file",filedata);
app.use("/series",seriesdata)
app.use("/season",seasondata)
app.use("/episode",episodedata)

app.listen(env.port, () => { console.log("Server is running on 4444 port") });

