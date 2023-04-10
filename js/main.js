//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

let picBtn = document.querySelector("button")
picBtn.addEventListener("click", getPic)
let iframe = document.querySelector("iframe")
let image = document.querySelector("img")

function getPic(){
    let selection = document.querySelector("input").value
    let url = `https://api.nasa.gov/planetary/apod?api_key=5eiX5ONW8FBgpaPadrCdaQgIgLLNMwsoPnGCJZ7a&date=${selection}`

    

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector("h2").innerText = data.title
      if (data.media_type == "image"){
        document.querySelector("img").src = data.url
        image.classList.remove("hidden")
        iframe.classList.add("hidden")
      }
      else if (data.media_type == "video"){
        document.querySelector("iframe").src = data.url
        iframe.classList.remove("hidden")
        image.classList.add("hidden")
      }
      else{
        console.log("unknown media type", data.media_type)
      }
      document.querySelector("h3").innerText = data.explanation
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
