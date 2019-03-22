const request = require('request');

const geocode = (address, callback) => {
    encodedAddress = encodeURIComponent(address);
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedAddress}.json?access_token=pk.eyJ1IjoidG9wZXRpbiIsImEiOiJjanRoYzJheTgxeTRpNDBtdWIxMWZpMnhvIn0.d-eMCaQR8hGq8br93_sYCQ`
    
    request({url: url, json: true}, (error, response, body) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (body.features.length === 0) {
            callback('Location not found', undefined);
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    });
}

module.exports = geocode