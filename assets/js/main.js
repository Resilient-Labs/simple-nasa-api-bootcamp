//The user will enter a date. 
// Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

import APIKEY from "./secret.js"
document.querySelector("button").addEventListener("click", runSearch)

function runSearch(){
const inputDate=document.querySelector("input").value
console.log(inputDate)

const url=`https://api.nasa.gov/planetary/apod?api_key=${APIKEY}&date=${inputDate}`

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.media_type === 'image'){
            document.querySelector('img').src=data.hdurl
            document.querySelector('iframe').style.display='none'
        }
        else if(data.media_type === 'video'){
            document.querySelector('iframe').src=data.url 
             document.querySelector('img').style.display='none'
        }
        document.querySelector('h2').textContent=data.title
        
        document.querySelector('h3').textContent=data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
