//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPic)

function getPic(){
    let dayVal = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=oVwX6zICk1ac9xxDeG9CRP1N38513tzhiw6Nl0AL&date=${dayVal}`

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        document.querySelector('img').src = data.hdurl
        if(data.media_type === 'image'){
          document.querySelector('img').src = data.hdurl
          document.querySelector('iframe').style.display = "none"
        }else if(data.media_type === 'video'){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').style.display = "none"
        }else{
            alert('Unsupported Media Type')
        }

    })
    .catch(err =>{
        console.log(`error ${err}`)
    })
}