import dotenv from "dotenv";
import connectDB from "./db/connection.js";
import { app } from "./app.js";
dotenv.config({
  path: "./",
});

const PORT = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running at port:- ${PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDB connection Failed!!!");
  });



/*
import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.error("Error", error);
      throw error;
    });

    app.listen(`${process.env.PORT}`, () => {
      console.log(`Server:- ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("error", error);
    throw error;
  }
})();
*/
