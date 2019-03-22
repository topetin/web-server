request = require('request')

const forecast = (lat, lng, callback) => {
    const url = `https://api.darksky.net/forecast/32e45e6c41a044618f9d3b75a2113b08/${lat},${lng}`

    request({url: url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to forecast services.', undefined)
        } else if (body.code === 400) {
            callback('Unable to fetch weather for that location.', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary} It's currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain)`)
        }
    });
}

module.exports = forecast