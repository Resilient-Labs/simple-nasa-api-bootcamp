//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
    const val = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=NbU3KbXpPmAba2cRDKAsp1dK1nWbd5ZejhonFtJQ&date=${val}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            if (data.media_type === 'video'){
                document.querySelector('iframe').src = data.url 
                document.querySelector('img').src = ''
            }else{
                document.querySelector('iframe').src = '' 
                document.querySelector('img').src = data.url
            } 
        })
        .catch(err => {
            console.log('error')
        })
}