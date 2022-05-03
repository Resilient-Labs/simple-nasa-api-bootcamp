//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/



document.querySelector('button').addEventListener('click', getDate)

function getDate() {
    let day = document.querySelector('input').value
    
    const url = `https://api.nasa.gov/planetary/apod?api_key=a2LI4tojUOwvBM6BhEWa3cx6ZzIeLzkfdTuwV5FL&date=${day}`

    const name = document.querySelector('h2')
    const image = document.querySelector('img')
    const desc = document.querySelector('h3')
    
    
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.hdurl)
        name.innerText = data.title
        image.src = data.hdurl
        desc.innerText = data.explanation

    })
    .catch(err => {
        console.log(`error ${err}`)
});
}


