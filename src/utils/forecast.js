const request = require('request');


const forecast = (lat,long,callback)=>{
    const url = 'https://api.darksky.net/forecast/91ec487f48d8fe8d8fb5a7eb04729776/'+lat+','+long+'?units=si';

    //destructured response into body
    request({url,json:true},(error,{body})=>{
        if(error)
        {
            callback('Unable to connect to weather services',undefined);
        }
        else if(body.error)
        {
            callback('Wrong address. Try again !',undefined)
        }

        else{
            callback(undefined,body.daily.data[0].summary+ " It is currently "+body.currently.temperature +" degrees out. There is a "+ body.currently.precipProbability +" % chance of rain")
        }
    });
};

module.exports = forecast;