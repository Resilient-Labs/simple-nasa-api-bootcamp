document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=rnRg8jChhcSmNrdpcb9oQ8ag3s22Ri6WnSU3yfdP&date=${date}`

fetch(url)
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
