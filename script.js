
const getDate = (e) => {
    e.preventDefault()
    console.log(document.querySelector('input').value)
    fetch("https://api.nasa.gov/planetary/apod?api_key=YTYijeEauBirXv8xKhOybrlmqHzwPB6ZjHaMkoej" +
    `&date=${document.querySelector('input').value}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data.hdurl)
        if (data.media_type === 'image') {
            return document.querySelector('img').src = data.hdurl
        } else {
            (data.media_type === 'video')
            return document.querySelector('iframe').src = data.url
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

document.querySelector('#button').addEventListener('click', getDate)

