const request = require('request');

const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiZGhhaXJ5YTIzIiwiYSI6ImNrM3U2bjFwZTA5bHkza29wOTl2MTJyd2cifQ.ytyKZHCmpmBDZ6f2JKi3lg&limit=1';

    request({url,json:true}, (error,{body})=>{
            if(error)
            {
                    callback('Unable to connect to service !',);
            }
            else if(body.features.length == 0)
            {
                    callback('Unable to find location. Try again !',);
            }
            else 
            {
                    callback(undefined, { 
                            lattitude : body.features[0].center[1],
                            longitude : body.features[0].center[0],
                            location  : body.features[0].place_name
                            });
            }
    });

};

const geolocation = (callback)=>{
        if(!navigator.geolocation){
                callback('Geolocation not supported',)
        }
        else {
        navigator.geolocation.getCurrentPosition((position)=>{
                callback(undefined,{
                        lattitude:position.coords.latitude,
                        longitude:position.coords.longitude,
                        location:'Current location'
                })
        });
}
}

module.exports = {
        geocode
}