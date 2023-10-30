//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', nasaMedia)


function nasaMedia() {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=3yVgG2BkDHJ2geCxVAdPrZhHsuthOXCa79y64hBh&date=${date}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.url
            document.querySelector('h3').innerText = data.explanation
        })
        .catch(err => {
            console.log(`error ${err}`) 
    })
}

