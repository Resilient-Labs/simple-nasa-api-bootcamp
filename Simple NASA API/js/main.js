//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getAPOD)

function getAPOD(){
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=YCnOOTLFel2pkokvgZuId8qPuZaGNYw12XPZmHXh&date=${date}`)
    .then(res => res.json())
    .then(data => {
        let video = document.querySelector('iframe')
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        video.src = data.url
        document.querySelector('h3').innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}


