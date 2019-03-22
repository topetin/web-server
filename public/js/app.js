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
         data.error ? requestInfo.textContent = data.error : 
         requestInfo.textContent = data.location, weatherInfo.textContent = data.forecastData
    })
})
})
