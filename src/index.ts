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


  // const mainJSON = {
  //   city:{
  //     cityName: astrologyJSON.location.name,
  //     countryName: astrologyJSON.location.country,
  //     localTime: astrologyJSON.location.localtime,
  //     timezone: astrologyJSON.location.tz_id,
  //   },
  //   astrology: astrologyJSON.astronomy.astro,

  // }

  // console.log(mainJSON);

  console.log(astrologyJSON);
  console.log(forecastJSON);
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);
})