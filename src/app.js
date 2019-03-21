const path = require('path')
const express = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

//last insert
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Mariana'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About page'
    }) 
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page'
    })
})

app.listen(3000, () => {
    console.log('server is up on port 3000')
})