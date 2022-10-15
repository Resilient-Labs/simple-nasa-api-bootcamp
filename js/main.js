//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// https://api.nasa.gov/planetary/apond?api_key =enter it here&date=2022-10-12 - this date is hard coded, use temp lit to pass in your variable day

//add video version media

document.querySelector('button').addEventListener('click',getDate)

function getDate() {
    const day = document.querySelector('input').value
    console.log(day)
    fetch(`https://api.nasa.gov/planetary/apod?api_key=Bjvt3ie0y7cguapfJHy2pD5SVIUubTgabgiIwn0V&date=${day}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)

    if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
        // document.querySelector('iframe').style.display = "none"

    } else if (data.media_type === 'video') {
        document.querySelector('iframe').src = data.url
        document.querySelector('img').style.display = "none"
    }
    document.querySelector('h2').innerText = data.title
     document.querySelector('h3').innerText = data.explanation
})
.catch(err => { 
    console.log(`error ${err}`) 
})
}