//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


//what I need: media queries:

//after looking at the html and reading the prompt again, I know there is an area where the user will enter in a date, I would like to link that info back to my api.

//there is also a button for 'get picture' that the user can press. 

//There will need to be media querires for after button click and where the info should show


// Get any date that a video displayed instead of an image.

import { apiKey } from "./apikeys"
document.querySelector('button').addEventListener('click', getPhoto)

function getPhoto() {
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
console.log('This is the url', url)
console.log('this is the entered date', date)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data.date)
            console.log(data.title)
            console.log(data.hdurl)
            console.log(data.explanation)

            
            document.querySelector('iframe').src =data.url
            document.querySelector('h2').textContent = data.title
            document.querySelector("img").src = data.hdurl;
            document.querySelector("h3").textContent = data.explanation;
        })
        .catch(err => {
            console.error(`error ${err}`)
        })

}
