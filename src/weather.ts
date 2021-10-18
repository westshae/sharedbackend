//Adds autocomplete to whatever string is provided
const autocomplete = async (location:string) =>{
  const axios = require("axios");
    const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/search.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: location
      }
    })
    return(recieved.data.at(0));
}

module.exports = {
  //Returns astronomy data, such as sunrise/set, moon phase etc
  astronomy: async function(location:string){
    const axios = require("axios");
    let autocompleted = await autocomplete(location);
    let recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/astronomy.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: autocompleted
      }
    })
    return(recieved.data);
  },

  //Returns next 3 days of weather
  forecast: async function(location:string){
    const axios = require("axios");

    let autocompleted = await autocomplete(location);


    const recieved = await axios.get("https://weatherapi-com.p.rapidapi.com/forecast.json", {
      headers: {
        "x-rapidapi-host":"weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key":process.env.RAPIDXAPI
      },
      params: {
        q: autocompleted,
        days: "5"
      }
    })
    return(recieved.data);
  }
}