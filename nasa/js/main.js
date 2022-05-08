//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getInfo)

function getInfo(){
    let dateVal = document.querySelector('input').value
        console.log(dateVal)
    let url = `https://api.nasa.gov/planetary/apod?api_key=3pAgnERGsjDiXDht29INpBSswUaVVNLBQ0OfETQU&date=${dateVal}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('h2').innerText = data.date
            document.querySelector('h3').innerText = data.title
            document.querySelector('img').src = data.hdurl
            document.querySelector('h4').innerText = data.explanation

            if (data.media_type === 'image') {
                document.querySelectorAll('img').src = data.hdurl
                document.querySelector('iframe').style.display = 'none'
            } else if(data.media_type=== 'video') {
                document.querySelector('iframe').src = data.url
                document.querySelectorAll('img').style.display = 'none'
            }else{
                alert('Unsupported Media Type')
            }
        
        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}
