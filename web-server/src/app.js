const path = require('path');
const express = require('express');
const hbs = require('hbs');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

// console.log(__dirname);
// console.log(path.join(__dirname,'../public'));

const app = express();

// define paths for Express config
const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// setup handlebars engine and views path
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index',{
        title: 'Weather',
        name: 'Avneet'
    });
})

app.get('/about', (req, res) => {
    res.render('about',{
        title: 'About Me',
        name: 'Avneet Kaur'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Avneet Kaur',
        helpText: 'Help text'
    })
})

app.get('/weather', (req, res) => {
    if(!req.query.address){
        return res.send({
            error: 'Invalid Address'
        })
    }

    geoCode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if(error){
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
    // res.send(
    //     {
    //         forecast: "It is cold today",
    //         location: "Mohali",
    //         address: req.query.address
    //     })
})

app.get('/products', (req, res) => {
    if(!req.query.search){
        return res.send({
            error: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})

app.get('/help/*', (req, res) => {
    res.render('404-page', {
        title: "My 404 page",
        errText: "Help article not found!"
    })
})

app.get('/*',(req, res) => {
    res.render('404-page', {
        title: "My 404 page",
        errText: "Page does not found!"
    })
})

app.listen(3000, () => {
    console.log("Server is up on 3000.");
})







// app.get('', (req, res) => {
//     res.send("<h1>Express</h1>");
// })

// app.get('/help', (req, res) => {
//     res.send([
//         {
//             name: "Avneet"
//         },
//         {
//             name: "Anahat"
//         },

//     ])
// })

// app.get('/about', (req, res) => {
//     res.send("<h1>About</h1>")
// })