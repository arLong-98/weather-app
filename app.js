const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')





geocode('Madhya Pradesh',(error,data)=>{
        console.log('error: '+error);
        console.log('Data: '+JSON.stringify(data));

        forecast(data.lattitude,data.longitude,(error,data)=>{
                console.log('error: '+error);
                console.log('data: '+JSON.stringify(data));
        });
});