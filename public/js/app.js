const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const msgOne = document.querySelector('#msgOne');
const msgTwo = document.querySelector('#msgTwo');
const msgThree = document.querySelector('#msgThree');
const msgFour = document.querySelector('#msgFour');

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault(); //prevents default action which is to refresh the page

    const location = search.value;
    const url = '/weather?address='+location; //fetches from heroku url or local url depending where it is accessed

    msgOne.textContent = 'Loading...';
    msgTwo.textContent='';

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
                msgOne.textContent = data.error;
            else{
                msgOne.textContent = data.location;
                msgTwo.textContent = data.forecastdata;
            }
        });
    });
});

const sendLocation = document.querySelector('#send-location').addEventListener('click',(event)=>{
        event.preventDefault();

        if(!navigator.geolocation)
            return alert('Not supported');
        
        msgThree.textContent = 'Loading...';
        msgFour.textContent='';
        
        navigator.geolocation.getCurrentPosition((position)=>{
                const lat = position.coords.latitude;
                const long = position.coords.longitude;
                const url =`/autoWeather?lat=${lat}&long=${long}`;
                
                fetch(url).then((response)=>{
                    response.json().then((data)=>{
                        if(data.error)
                            msgOne.textContent = data.error;
                        else{
                            msgThree.textContent = 'Current location';
                            msgFour.textContent = data.forecastdata;
                        }
                    })
                })
            });
})
