

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const msgOne = document.querySelector('#msgOne');
const msgTwo = document.querySelector('#msgTwo');

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault(); //prevents default action which is to refresh the page

    const location = search.value;
    const url = 'http://localhost:3000/weather?address='+location;

    msgOne.textContent = 'Loading...';

    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
                msgOne.textContent = error;
            else{
                msgOne.textContent = data.location;
                msgTwo.textContent = data.forecastdata;
            }
        });
    });
});