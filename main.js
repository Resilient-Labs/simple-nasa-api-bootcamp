let apiKey = "4JTWHMiQCK04kM6TyXkSiW9TFQ00gLkQWEabyLY9"
const btn = document.querySelector("button")
// let item = document.querySelector("#itemInput").value
btn.addEventListener('click', ()=>{
  const input = document.querySelector("#itemInput").value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${input}`)
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        if (response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        } else if (response.media_type == "video"){
          document.querySelector('iframe').src = response.url
        }
      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      });
})
