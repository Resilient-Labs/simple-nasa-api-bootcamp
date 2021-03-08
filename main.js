
document.querySelector('button').addEventListener('click', spacePic)


let api_key = "reXXQE0EZauoLQt1rzBo4JQ9cmpl2nbXvp5568wN"
function spacePic(){

    const inputVal = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=reXXQE0EZauoLQt1rzBo4JQ9cmpl2nbXvp5568wN&date=${inputVal}`

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let description = data.explanation
        let photos = data.url
        let inputValue =data.date
        let name = data.title
        document.querySelector('h3').innerText = description
        document.querySelector('img').src = photos
        document.querySelector('.name').innerText = name
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}