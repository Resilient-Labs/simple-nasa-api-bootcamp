//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto) //selecting the button element from the html and making it run the function getPhoto (which will be created in the following lines) when clicked

function getPhoto(){
    let date = document.querySelector('input').value
    console.log(date)
    let url = `https://api.nasa.gov/planetary/apod?api_key=JKqBx7bTAjQqQZAZM15dUVOoqqfJXFRHVckqRlfL&date=${date}`
    console.log(url)
    fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('h2').innerText = data.title
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
