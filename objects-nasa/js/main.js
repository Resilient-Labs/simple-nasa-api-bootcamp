//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getPhoto)

function getPhoto(){
    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=Z4ARG4i5ai8c0m4jXBHZLheANR0Juygkljzm0cfY&date=${date}`

    document.querySelector('img').src=''
    document.querySelector('iframe').src-''
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText=data.title
        document.querySelector('p').innerText=data.explanation
        if (data.media_type === 'image'){
            document.querySelector('img').src = data.url
        } else if(data.media_type === 'video'){
            document.querySelector('iframe').src = data.url
        } else {
            alert('Unsupported Media Type')
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

