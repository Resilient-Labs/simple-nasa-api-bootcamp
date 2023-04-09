//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPic)

function getPic() {
    let selection = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=DsfsLzWcZOOIGckE0Cov5tXBraAnAz3bMA3ahN4r&date=${selection}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            document.querySelector('img').src = data.hdurl
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}