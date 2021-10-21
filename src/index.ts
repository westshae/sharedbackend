const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const weather = require("./weather");

const app = express();
app.use(cors());
dotenv.config();

app.get("/weather", async (req:any, res:any)=>{
  try{
    const location:string = req.query.location;//Gets location from query URL

    //Queries the WeatherAPI for astronomy/forecast information
    const astrologyJSON = await weather.astronomy(location);
    const forecastJSON = await weather.forecast(location);
  
    if(astrologyJSON == null || forecastJSON == null){return;}
  
    //Packages information into new JSON, with only required information
    const mainJSON = {
      city:{
        cityname: astrologyJSON.location.name,
        countryname: astrologyJSON.location.country,
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
    res.send(mainJSON);//Returns new JSON
  }catch(error){
    console.log(error);
  }
  
})

app.listen(process.env.PORT,()=>{
  console.log("Running on PORT: " + process.env.PORT);//Shows that server running, with selected .env port
})