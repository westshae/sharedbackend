module.exports = {
  //Returns timezone data
  timezone: async function(location:string){
    const axios = require("axios");

    console.log("timezone");
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

  astronomy: function(){
    console.log("astronomy");

  },

  realtimeweather: function(){
    console.log("realtimeweather");

  },
  forecastweather: function(){
    console.log("forecastweather");

  }
}