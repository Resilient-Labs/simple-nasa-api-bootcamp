//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// Needs api-datakey and date - you can use random email

const button = document.querySelector('button')
const url = 'https://api.nasa.gov/planetary/apod?api_key=NXAAGwyfeIROseR1cQLlLqNzaMag8fYRk6eYt89P'

button.addEventListener('click', () => {
    let search = document.querySelector('input').value

    fetch(url + `&date=${search}`) //Make sure to include to search for date
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        // console.log(data.date === search)
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        if (data.hdurl) {
            document.querySelector('img').src = data.hdurl
            // document.querySelector("iframe").style.display = "none";
        } else {
            document.querySelector('iframe').src = data.url
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
})