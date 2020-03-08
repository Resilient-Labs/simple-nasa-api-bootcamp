document.querySelector('form').addEventListener("submit", getNasaStuff)

function getNasaStuff (e) {
  let userAnswer = document.querySelector('input').value
  e.preventDefault()
  fetch(`https://api.nasa.gov/planetary/apod?api_key=eXHTFbJRcauaHCLWNR0a4bN4YdycDenrIsArDy5m&date=${userAnswer}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      if(response.media_type === "video"){
        document.querySelector('section').innerHTML = `<iframe width="703" height="916" src=${response.url}
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;
        picture-in-picture" allowfullscreen></iframe>`
        document.querySelector('img').src = ""
      }else {
        document.querySelector('section').innerHTML = ""
        document.querySelector('img').src = response.url
      }
        document.querySelector('p').textContent = response.explanation
   })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
}
