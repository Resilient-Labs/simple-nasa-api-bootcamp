let api_key = "8dFCb32WHLDjrXiAD8Kt2AVDUT0pdfJrDdBJwwy2"


document.getElementById('nasaBtn').addEventListener("click", () => {
  let date = document.getElementById('date').value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${date}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        if(response.media_type == "image"){
          document.querySelector("img").src = response.hdurl
        }else if(response.media_type == "video"){
          document.querySelector("iframe").src = response.url
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });


})
