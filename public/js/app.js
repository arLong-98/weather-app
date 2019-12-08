console.log('Client side js file loaded');

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//         response.json().then((data)=>{
//             console.log(data);
//         });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault(); //prevents default action which is to refresh the page

    const location = search.value;
    const url = 'http://localhost:3000/weather?address='+location;
    fetch(url).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
                return console.log(data.error);
            
                console.log(data.location);
                console.log(data.forecastdata);
        })
    })
});