//The user will enter a date. Use that date to get the NASA picture of the day from that date!
// worked with my house (hayden)


document.querySelector('button').addEventListener('click', spacePic)


let api_key = "tXr7HzF36bbDoZNXZKz0bv0U39hReNyEEkW5BMzQ"
function spacePic(){

    const inputVal = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=tXr7HzF36bbDoZNXZKz0bv0U39hReNyEEkW5BMzQ&date=${inputVal}`

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let description = data.explanation
        let photos = data.url
        let name = data.title
        document.querySelector('h3').innerText = description
        document.querySelector('img').src = photos
        document.querySelector('h2').innerText = name
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}
