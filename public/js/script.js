const weatherForm = document.querySelector('#weather-form')
const searchElement = document.querySelector('#location-input')
const requestInfo = document.querySelector('#request-info')
const weatherInfo = document.querySelector('#weather-info')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchElement.value
    requestInfo.textContent = 'Loading...'
    weatherInfo.textContent = ''

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            return requestInfo.textContent = data.error
        }
        if (data.forecastError) {
            return requestInfo.textContent = data.forecastError
        }
        requestInfo.textContent = data.location
        weatherInfo.textContent = data.forecastData
    })
})
})
