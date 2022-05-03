//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let pictureDate = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=ufJgdA2cgeT2Dc3ezgs6SQo2WkDtqggt259UPjJR&date=${pictureDate}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data.date)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

