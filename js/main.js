// The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// CREDIT TO https://github.com/nasa/apod-api and https://mdbootstrap.com/snippets/standard/ascensus/2865383#js-tab-view

document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {

    let year = document.querySelector('#year').value 
    let month = document.querySelector('#month').value
    let day = document.querySelector('#day').value

    let date = `${year}-${month}-${day}`

    const url = `https://api.nasa.gov/planetary/apod?api_key=&date=${date}`


    console.log(url);

    fetch(url) 

        .then(res => res.json ())

        .then(data => {

            console.log(data);

            document.querySelector('h2').innerText = data.title
            document.querySelector('img').src = data.url
            document.querySelector('h3').innerText = data.explanation

    })

        .catch(err => {
            console.log(`error ${err}`)
    })

}
