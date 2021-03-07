//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getImage)

let api_key = "5Ok20IZMZpzjgnbmgvkuWlaZ5c2HjDfv7lxeaOm2"
function getImage(){

    const inputVal = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=5Ok20IZMZpzjgnbmgvkuWlaZ5c2HjDfv7lxeaOm2&date=${inputVal}`

fetch(url)
    .then(res => res.json())
    .then(data => {

        console.log(data)
        let description = data.explanation
        let photos = data.hdurl
        let name = data.title
        document.querySelector('h3').innerText = description
        document.querySelector('h2').innerText = name
        document.querySelector('h1').innerText = "POTD of " + inputVal
        if(data.media_type === "image"){
        document.querySelector('img').src = photos
        }else{
            document.querySelector("iframe").src = data.url        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

}