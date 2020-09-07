//NASA API KEY ID:
// https://api.nasa.gov/planetary/apod?api_key=BHVqaCTuoTbSDzrAi7AShvrGtJyC3b5sEXyyEK01

const nasa ={
  button: document.getElementById("button"),
  video: document.getElementsByTagName("iframe")[0],
  picture: document.getElementById("picture"),
  getMedia(){
    const day = document.getElementById("day").value;
    const month= document.getElementById("month").value;
    const year = document.getElementById("year").value;
    fetch(`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=BHVqaCTuoTbSDzrAi7AShvrGtJyC3b5sEXyyEK01`)
      .then(response=>response.json())
      .then(data=>{
        // console.log(data)
        if (data.media_type == "image"){
          if(nasa.video.style.display=="inline"){
            nasa.picture.style.display="inline";
            nasa.video.style.display="none"
            nasa.picture.src = data.url;
          }else{
            nasa.picture.style.display="inline";
            nasa.picture.src = data.url;
          }
        }else if (data.media_type == "video"){
          if(nasa.picture.style.display=="inline"){
            nasa.video.src=data.url;
            nasa.video.style.display="inline";
            nasa.picture.style.display="none";
          }else{
            nasa.video.style.display="inline";
            nasa.video.src=data.url;
          }
        }
      })
  }
}

nasa.button.addEventListener("click", nasa.getMedia);
