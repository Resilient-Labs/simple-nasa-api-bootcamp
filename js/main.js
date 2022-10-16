document.querySelector('button').addEventListener('click', getMedia)

function getMedia() {

let date = document.querySelector('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=f6TOYHBKgo3VqfyIvQYPKHVw6SxPbjcr53TVBgjv&date=${date}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

        if (data.media_type == "video") {
            document.querySelector('h2').innerText = data.title
            document.querySelector('iframe').src = data.url
            document.querySelector('h3').innerText = data.explanation
        }
        else {
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.hdurl
        document.querySelector('h3').innerText = data.explanation
    }
})
console.log(data)
.catch(err=> {
    console.log(`error${err}`)
})
}