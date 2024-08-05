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
