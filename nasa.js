document.querySelector("button").addEventListener("click", getPicture)
  const inputValue = document.querySelector("input").value
  let video = document.querySelector("#video");
    video.style.display="none"
  let image= document.querySelector("#space-img")



// this function gets the picture or video from the input value
function getPicture(){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=blmaTqgDwqxMb7FDYFPO8WENAIcV3goLAHUHAScB&date=${inputValue}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response);
        if(response.media_type == "image"){
          image.src = response.url;
        }else if (response.media_type == "video"){
          video.style.display="auto"
          video.src = response.url;

        }
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
