//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture)

function getPicture() {
    const val = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${val}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            //displays data
            document.querySelector('h2').innerText = data.title
            document.querySelector('h3').innerText = data.explanation
            //displays video or picture accordingly
            if (data.media_type === 'video'){
                document.querySelector('img').src = ''
                document.querySelector('img').className = 'hidden'
                document.querySelector('iframe').src = data.url 
                document.querySelector('iframe').className = ''
            }else{
                document.querySelector('iframe').src = '' 
                document.querySelector('iframe').className = 'hidden'
                document.querySelector('img').className = ''
                document.querySelector('img').src = data.url
            } 
        })
        .catch(err => {
            console.log('error')
        })
}