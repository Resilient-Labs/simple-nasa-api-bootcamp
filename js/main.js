
let datetemplate= document.querySelector('input');
let buttonElement = document.querySelector('button');
buttonElement.addEventListener('click',(function(){
  fetch(`https://api.nasa.gov/planetary/apod?api_key=P8MoaznCZX9CrNEjgG1rwD6geT99yYcX3CjnK9dD&date=${datetemplate.value}`)
    // .value parse calander input date only
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
        let mediaType = response.media_type
        if(mediaType === "video"){
          let videoSrc = response.url;
          document.querySelector('iframe').src = videoSrc;
          document.querySelector('img').style.visibility = "hidden";
        }else if(mediaType === "image"){
          let imgSrc= response.url;
          document.querySelector('img').src = imgSrc;
          document.querySelector('iframe').style.visibility = "hidden";

        }


      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });

}
))
