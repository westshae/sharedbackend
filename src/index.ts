const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const weather = require("./weather");

const app = express();
app.use(cors());
dotenv.config();

app.get("/weather", async (req:any, res:any)=>{
  const location:string = req.query.location;
  const timezoneJSON = await weather.timezone(location);
  // const recieved = await axios.get("https://the-cocktail-db.p.rapidapi.com/random.php", {
  //   headers: {
  //     "x-rapidapi-host":"the-cocktail-db.p.rapidapi.com",
  //     "x-rapidapi-key":process.env.RAPIDXAPI
  //   }
  // })
  // res.send(recieved.data);
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})