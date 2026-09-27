//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const inputtedValue = document.querySelector('.inputValue');
document.querySelector('button').addEventListener('click', imageOfTheDateInputted)
let stuffReturned = {}

function imageOfTheDateInputted() {
    let media = inputtedValue.value
    console.log(media)
    fetch(
        `https://api.nasa.gov/planetary/apod?api_key=N1Yzg6YR0VucbbyKj6bkR2Q0bGo2sZxTXbx6puSR&date=${media}`
    )
        .then((res) => res.json())
        .then((data) => {
            stuffReturned = data
            console.log('Data from Nasa', data)
            display(stuffReturned)
        })
}

function display(dataWeGotFromAPI) {
    document.querySelector('h2').innerText = dataWeGotFromAPI.title
    document.querySelector('h3').innerText = dataWeGotFromAPI.explanation
    if (dataWeGotFromAPI.media_type === 'video') {
        document.querySelector('video').style.display = 'block'
        document.querySelector('img').style.display = 'none'
        document.querySelector('#video').src = dataWeGotFromAPI.url
    } else if (dataWeGotFromAPI.media_type === 'image') {
        document.querySelector('video').style.display = 'none'
        document.querySelector('img').style.display = 'block'
        document.querySelector('#image').src = dataWeGotFromAPI.hdurl
    }
}

