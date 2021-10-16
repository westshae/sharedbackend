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
  const astrologyJSON = await weather.astronomy(location);
  const realtimeJSON = await weather.realtime(location);
  const forecastJSON = await weather.forecast(location);

  console.log(timezoneJSON);
  console.log(astrologyJSON);
  console.log(realtimeJSON);
  console.log(forecastJSON);
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})