//The user will enter a date. Use that date to get the NASA picture 
// of the day from that date! https://api.nasa.gov/


document.querySelector("button").addEventListener("click",spaceMan)
let image = document.querySelector("img")
let iframe = document.querySelector("iframe")

function spaceMan(){
    let selection = document.querySelector("input").value
    let url = `https://api.nasa.gov/planetary/apod?api_key=vN6hdBQTbvPe1R482Y6zxLMflRvwJMxMYNIgFD6m&date=${selection}`

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector("h2").innerText = data.title //inserting the name

      if( data.media_type == "image" ){ //condional checking what media to insert
        document.querySelector("img").src = data.url //inserting the image
        image.classList.remove("hidden")
        iframe.classList.add("hidden")
      }else if( data.media_type == "video" ){
        document.querySelector("iframe").src = data.url //inserting the video
        image.classList.add("hidden")
        iframe.classList.remove("hidden")
      }else{
          console.log( "unknown media type", data.media_type )
      }

      document.querySelector("h3").innerText = data.explanation //inserting the description
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

spaceMan()



