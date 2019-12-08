const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
const app = express();

//paths for express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials');

//setup handlebars engine
app.set('view engine','hbs');
app.set('views',viewPath);
hbs.registerPartials(partialsPath);

//setup static directory to serve
app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
    res.render('index',{title:'Weather', name:'Dhairya'})
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About us', name:'Dhairya'});
})

app.get('/help',(req,res)=>{
    res.render('help',{text:'How may I help you',title:'Help',name:'Dhairya'});
});


app.get('/weather',(req,res)=>{

    if(!req.query.address){
        return res.send({error:'No address entered'});
    }

    geocode(req.query.address,(error,{lattitude,longitude,location}={} )=>{
        if(error){
            return res.send({error});
        }

        forecast(lattitude,longitude,(error,forecastdata)=>{
            if(error)
            {
                return res.send({error});
            }

            res.send({
                location, 
                forecastdata,
                address:req.query.address});

        });

    });
});


app.get('/products',(req,res)=>{
    if(!req.query.search){
     return res.send({
            error:'Provide a search term'
        });
    }
    console.log(req.query.search);
    
        res.send({
            products:[]
        });
});



app.get('/help/*',(req,res)=>{
    res.render('404page',{error:'Help article not found',title:'Error',name:'Dhairya'});
});

//showing 404 page
app.get('*',(req,res)=>{
    res.render('404page',{error:'Error 404. Page not found',title:'Error',name:'Dhairya'});

})


app.listen(3000,()=>{
    console.log('Server is up on port 3000');
});