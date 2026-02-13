//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getMedia)

function getMedia() {

    let inputedDate = document.querySelector('input').value

    let url = `https://api.nasa.gov/planetary/apod?api_key=r0iL7DchqbWXvQ0ZyG9LDwDGqpnIKZlGMzot2Hi8&date=${inputedDate}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('img').alt = data.title
        document.querySelector('p').innerText = data.explanation
        document.getElementById('arrow').style.display = 'none'
    })
    .catch(err => {
        console.log(`error: ${err}`)
    })
}