//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

import key from './key.js'
let url = `https://api.nasa.gov/planetary/apod?api_key=${key}`

//to get the max date = today
document.querySelector('input').max = new Date().toLocaleDateString('en-ca')
// console.log(document.querySelector('input').max)

//run function getAPOD when button is clicked (if no date is added default is today)
document.querySelector('button').addEventListener('click', getAPOD)

function loading(ms) {
    return new Promise(loaded => setTimeout(loaded, ms));
}

function getAPOD() {
    document.querySelector('h3').innerText = 'Your photo is on it\'s way! 🚀'; //would like to add a little animation hmm
    document.querySelector('p').innerText = ''
    document.querySelector('img').src = ''
    loading(1000).then(() => {
    let date = document.querySelector('input').value
    fetch(`${url}&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h3').innerText = data.title
        document.querySelector('p').innerText = data.explanation
        if (data.media_type==='image') {
            document.querySelector('iframe').classList.add('hidden')
            document.querySelector('img').classList.remove('hidden')
            document.querySelector('img').src = data.url
            console.log(document.querySelector('iframe').classList, document.querySelector('img').classList)
        } else {
            document.querySelector('img').classList.add('hidden')
            document.querySelector('iframe').classList.remove('hidden')
            document.querySelector('iframe').src = data.url
            console.log(document.querySelector('iframe').classList, document.querySelector('img').classList)
        }
    })
    })
}