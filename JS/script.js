//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
// API key : 6UXkLQXV5aaZgahY92pVRgxV680fclg3m5Gr9liB

document.querySelector("button").addEventListener("click", getInfo)

function getInfo(){
    const getNasa = document.querySelector("input").value 
    console.log(getNasa)

    const url=`https://api.nasa.gov/planetary/apod?api_key=6UXkLQXV5aaZgahY92pVRgxV680fclg3m5Gr9liB&date=${getNasa}`
   
    fetch (url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
       document.querySelector("img").src = data.hdurl
       document.querySelector("iframe").src = data.media_type
       document.querySelector("h2").textContent = data.title
       document.querySelector("h3").textContent = data.explanation


    })
    .catch(err => {
        console.log (`error ${err}`)

    })
}
 /*
        document.querySelector("img").src = data.hdurl
        document.querySelector("iframe").src = data.url
        document.querySelector("h2").textContent = data.title
        document.querySelector("h3").textContent = data.explanation
        */