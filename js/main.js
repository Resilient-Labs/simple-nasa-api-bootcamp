//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getDate)

function getDate() {
    let day = document.querySelector('input').value

    const url = `https://api.nasa.gov/planetary/apod?api_key=a2LI4tojUOwvBM6BhEWa3cx6ZzIeLzkfdTuwV5FL&date=${day}`

    const name = document.querySelector('h2')
    const image = document.querySelector('img')
    const frame = document.querySelector('iframe')
    const desc = document.querySelector('h3')
    
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        name.innerText = data.title
        desc.innerText = data.explanation
        if ( data.media_type === "image") {
            image.style.display = 'block'
            image.src = data.hdurl
            frame.style.display = 'none'
        } else if ( data.media_type === "video") {
            frame.style.display = 'block'
            frame.src = data.url
            image.style.display = 'none'
        } else {
            alert('Media Not Supported')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
});
}


