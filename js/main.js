//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getImage)
function getImage(){
let dateDay = document.querySelector('input').value
   const url = `https://api.nasa.gov/planetary/apod?api_key=nsa8oupMg6lwvmOLalxS4CEMtuVCPefgISd9b0j2&date=${dateDay}`
    fetch(url)
   .then(res => res.json())
   .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('h1').innerText = data.date
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('.video').src = data.url
})
.catch(err => {
    console.log(`error ${err}`)
});}