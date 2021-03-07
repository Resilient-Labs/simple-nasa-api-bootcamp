//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', spacePic)


let api_key = "y1iMb2zVc6dgYKU4XCSwnLRhUhOVU1BwRpmTYv6V"
function spacePic(){

    const inputVal = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=20sZnLfE9e2JItPuzngjcceOXsLj7SNSnOk1ueeJ&date=${inputVal}`

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let description = data.explanation
        let photos = data.url
        let inputValue = data.date
        let name = data.title
        document.querySelector('h3').innerText = description
        document.querySelector('img').src = photos
        document.querySelector('.name').innerText = name
     
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}