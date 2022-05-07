//Connect NASA API so that when the user enters a date it returns an image or video from that specific date.
document.querySelector("button").addEventListener("click", search)


// This function allows you to get the input the user put in the text box.
function search() {
  const date = document.querySelector("input").value
  const url = `https://api.nasa.gov/planetary/apod?api_key=93ZwPNVdQAXfd7xnGmIwL3wHdWRgjpF3rsuGDsfe&date=${date}`


  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.url)
        document.querySelector("img").src = data.url
      })
      .catch(err => {
          console.log(`error ${err}`)
  });
}
