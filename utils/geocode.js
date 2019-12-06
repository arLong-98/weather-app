const request = require('request');

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?types=country&access_token=pk.eyJ1IjoiZGhhaXJ5YTIzIiwiYSI6ImNrM3U2bjFwZTA5bHkza29wOTl2MTJyd2cifQ.ytyKZHCmpmBDZ6f2JKi3lg&limit=1';

    request({url:url,json:true}, (error,response)=>{
            if(error)
            {
                    callback('Unable to connect to service !',undefined);
            }
            else if(response.body.features.length == 0)
            {
                    callback('Unable to find location. Try again !', undefined);
            }
            else 
            {
                    callback(undefined, { 
                            lattitude : response.body.features[0].center[1],
                            longitude : response.body.features[0].center[0],
                            location  : response.body.features[0].place_name
                            });
            }
    });

};

module.exports = geocode;