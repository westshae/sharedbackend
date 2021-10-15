import express from "express";

const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/", (req, res)=>{
  res.send("WOO");
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})