//Enable your user to enter a date and return the picture/video of the day from NASA's API
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const date = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=SkW3sYZQ1uZC6R7O6JwrO6FKqSJD938pqF224Idc&date=${date}`

fetch(url)
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
        }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}