// create a query that retrieves pictures from NASA API based on the date users input

// //The user will enter a date. 
// Use that date to get the NASA picture of 
// the day from that date! https://api.nasa.gov/

let image = document.querySelector("img")
let iframe = document.querySelector("iframe")

document.querySelector("button").addEventListener("click", getPic)

function getPic(){
    let userInput = document.querySelector("input").value
    const url = `https://api.nasa.gov/planetary/apod?api_key=xS5UZCCVpaAffc3N0pLD7685FxTzNg12clevQA8e&date=${userInput}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
        console.log(data)


        if(data.media_type == "image"){
            document.querySelector("img").src = data.url
            image.classList.remove("hidden")
            iframe.classList.add("hidden")
        } else if(data.media_type == "video"){
            document.querySelector("iframe").src = data.url
            iframe.classList.remove("hidden")
            image.classList.add("hidden")
        } else {
            console.log("unknown media type", data.media_type)
        }

        document.querySelector("h2").innerHTML = data.title
        document.querySelector("h3").innerHTML = data.explanation

    })
    .catch(err =>{
        console.log(`error ${err}`)
    });
}

