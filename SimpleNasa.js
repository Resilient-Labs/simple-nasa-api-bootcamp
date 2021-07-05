let api_Key = "7YXJonHrIZfnwnVVRVKiCOkOrOFcUVyVYtFsHYEX"

document.getElementById('GenerateBtn').addEventListener("click", () => {
  let date = document.getElementById('date').value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_Key}&date=${date}`)
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
// https://api.nasa.gov/planetary/apod?api_key=7YXJonHrIZfnwnVVRVKiCOkOrOFcUVyVYtFsHYEX
//
