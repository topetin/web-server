const weatherForm = document.querySelector('#weather')
const searchElement = document.querySelector('#location-input')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = searchElement.value

    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
    response.json().then((data) => {
         data.error ? console.log(data.error) : console.log(data.location)
    })
})
})
