const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');


const address = process.argv[2];
//get location from command line
if(!address)
{
        console.log('Enter an address !');
}

else 
{
        geocode(address,(error,data)=>{

                if(error)
                        return console.log('error: '+ error);

                forecast(data.lattitude,data.longitude,(error,forecastdata)=>{
                        if(error)
                                return console.log('error: '+error);
                        console.log(data.location);
                        console.log(forecastdata);
                });
        });     
}
