const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//last insert
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    }) 
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help'
    })
})

app.get('/weather', (req, res) => {
    req.query.address ? 
    geocode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        error ? 
        res.send({error}) : 
        forecast(latitude, longitude, (forecastError, forecastData) => {
            forecastError ? 
            res.send({forecastError}) : 
            res.send({location, forecastData})
        }) 
    }) : 
    res.send({error: 'Address must be provided'})
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'error',
        message: 'Page not found'
    })
})

app.listen(port, () => {
    console.log('server is up on port 3000')
})