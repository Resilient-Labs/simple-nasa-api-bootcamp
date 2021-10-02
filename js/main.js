//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const apiKey = 'CVQ9eaoZaKseErJ8RSiZ6Gh52N6JtNAfLiCY1Yrm'

document.querySelector('button').addEventListener('click',nasa)

function nasa(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=' + apiKey + `&date=${document.querySelector('Input').value}`)
    .then(response => {
        console.log(response)
        return response.json()
        })
    .then(data => {document.querySelector('img').src=data.hdurl
    console.log(data)
    document.querySelector('h2').innerText=data.title
    document.querySelector('h3').innerText=data.explanation
    });
}
