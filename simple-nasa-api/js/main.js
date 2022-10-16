
document.querySelector('button').addEventListener('click', findAPOD)

function findAPOD() {
    let date = document.querySelector('input').value
    fetch(`https://api.nasa.gov/planetary/apod?api_key=BokHMfNBNkhoevt1oqooS3Tkp4a1jXs71CGfsSb5&date=${date}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)

        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
})
    .catch(err => {
        console.log(`error ${err}`)
});

}

