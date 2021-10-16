const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");

const app = express();
dotenv.config();

app.get("/nightofdrinks", async (req:any, res:any)=>{
  const test = await axios.get("https://the-cocktail-db.p.rapidapi.com/random.php", {
    headers: {
      "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
      "x-rapidapi-key":process.env.RAPIDXAPI
    }
  })
  res.send(test.data);
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})