module.exports = {
  //Returns timezone data
  timezone: async function(location:string){
    const axios = require("axios");
      const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/timezone.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: location
      }
    })
    return(recieved.data);
  },
  //Returns astronomy data, such as sunrise/set, moon phase etc
  astronomy: async function(location:string){
    const axios = require("axios");
      const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/astronomy.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: location
      }
    })
    return(recieved.data);
  },
  //Returns current weather data
  realtime: async function(location:string){
    const axios = require("axios");

      const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: location
      }
    })
    return(recieved.data);
  },
  //Returns next 3 days of weather
  forecast: async function(location:string){
    const axios = require("axios");

      const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/current.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: location,
        days: 3
      }
    })
    return(recieved.data);

  }
}