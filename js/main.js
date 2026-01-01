//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const apiKey = 'x0mNIIVGc9fATQ9wSrqVqjvtkGCTUF0Rb0OigrRg'
let audio = document.querySelector('audio')


document.querySelector('button').addEventListener('click',loadPhoto)

function loadPhoto() {
   audio.volume=.2
   audio.play()
    const input = document.querySelector('input').value
    console.log(input)
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            if (data.media_type === 'video') {
                document.querySelector('img').style.display = 'none'
                document.querySelector('iframe').style.display = 'block'
                document.querySelector('iframe').src = data.url
             } else if (data.media_type === 'image') {
                document.querySelector('iframe').style.display = 'none'
                document.querySelector('img').style.display = 'block'
                document.querySelector('img').src = data.hdurl
             } else if (data.media_type === 'other') {
                document.querySelector('iframe').style.display = 'none'
                document.querySelector('img').style.display = 'none'
             }
            
        })
}