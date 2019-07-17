document.querySelector("button").addEventListener("click", function(){
  const inputValue = document.querySelector("input").value
  fetch("https://api.nasa.gov/planetary/apod?api_key=jBGNKdkfFeTK2Brt37aT1XxTFCxDdE93rPSmw16v&date=" + `${inputValue}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    console.log(response.hdurl)
    if (response.media_type === "image"){
      document.querySelector("img").src = response.hdurl
      document.querySelector("img").style = "display: block"
      document.querySelector("iframe").style = "display: none"
    } else if(response.media_type === "video"){
      document.querySelector("iframe").src = response.url
      document.querySelector("img").style = "display: none"
      document.querySelector("iframe").style = "display: block"
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
});
