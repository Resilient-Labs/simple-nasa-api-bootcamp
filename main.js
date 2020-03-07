document.querySelector("button").addEventListener('click', (e) => {
  thoughtOfTheDay()
})

document.querySelector("#getInput").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    thoughtOfTheDay()
  }
})

function thoughtOfTheDay(){
  let userAnswer = document.querySelector("input").value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=sH5jXqgxCZfxhTgF69S0N8aJY9sdzKb4pDJLrcAJ&date=${userAnswer}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    console.log(response)
    let section = document.getElementById('videoOrImage')
    section.innerHTML = ""
    if (response.media_type === "video") {
      console.log(response);
      let video = document.createElement('iframe')
      video.src = response.url
      section.appendChild(video)
    } else {
      document.querySelector('img').src = response.url
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  });
}

//house Hayden project
// Got help from Mark
