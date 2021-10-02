document.querySelector("#date").addEventListener("change", nasa)

function nasa(){
let date = document.querySelector('input')
let image = document.querySelector('#nasaImage')
let explanation = document.querySelector("#wordsFromNasa")
const url = ("https://api.nasa.gov/planetary/apod?api_key=Gd6BaCRF5y7zyaSipLId2O0hwgMU0VrT6VPzdPIl&date=" + date.value)

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('#nasaImage').src = data.url
        document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {alert("Error - couldn't find results, sorry!")
    })
}

// this code was worked on by Hayden 2
