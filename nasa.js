document.querySelector("button").addEventListener("click", function(){
  let mm = document.getElementById("month").value;
  let dd= document.getElementById("day").value;
  let yy= document.getElementById("year").value;
  let date = yy + '-' + mm + '-' + dd

  fetch("https://api.nasa.gov/planetary/apod?api_key=jBGNKdkfFeTK2Brt37aT1XxTFCxDdE93rPSmw16v&date=" + `${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if (response.media_type==="image"){
        document.getElementById("nasaPhoto").src = response.hdurl
      }else{
        document.getElementById("nasaVid").src = response.url
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });

});
