const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast')

forecast(-75.7088,44.1545,(error,data)=>{
        console.log('error: '+error);
        console.log('data: '+JSON.stringify(data));
})



geocode('Georgia',(error,data)=>{
        console.log('error: '+error);
        console.log('Data: '+JSON.stringify(data));
});