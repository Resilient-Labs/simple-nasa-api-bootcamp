//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener ("click", nasaApod)



function nasaApod(){
    let date = document.querySelector("input").value 
    const url = `https://api.nasa.gov/planetary/apod?api_key=AzyRq7PXJ86BG7fZJiwEd6eab9YSmbsFSeCmyFLy&date=${date}`
    fetch(url)
     .then(res => res.json()) 
     .then(data => {
         if ( data.media_type === "image"){
            document.querySelector("img").src=data.url
            document.querySelector("iframe").classList.toggle("hidden")
         } else if( data.media_type === "video"){
            document.querySelector("iframe").classList.toggle("hidden")
            document.querySelector("iframe").src=data.url
            document.querySelector("img").src=""
         }     
     document.querySelector("h3").innerText = data.explanation
     document.querySelector("h2").innerText = data.title
     })
     .catch(err => {
     console.log(`error ${err}`)
     });
    
}


