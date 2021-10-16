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
  const astrologyJSON = await weather.astronomy(location);
  const forecastJSON = await weather.forecast(location);


  const mainJSON = {
    city:{
      cityname: astrologyJSON.location.name,
      countryname: astrologyJSON.location.country,
      localtime: astrologyJSON.location.localtime,
      timezone: astrologyJSON.location.tz_id,
    },
    astrology: astrologyJSON.astronomy.astro,
    current: {
      temp: forecastJSON.current.temp_c,
      condition: forecastJSON.current.condition,
      windspeed: forecastJSON.current.wind_kph,
      winddirection: forecastJSON.current.wind_dir,
      humidity: forecastJSON.current.humidity,
    },
    forecast: forecastJSON.forecast,
  }
  res.send(mainJSON);
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})