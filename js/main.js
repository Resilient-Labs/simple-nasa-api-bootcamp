//Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
document.querySelector('input').valueAsDate = new Date()
document.querySelector('button').addEventListener('click', getData)

  function getData(){
    let date = document.querySelector('input').value
    let apiLink = `https://api.nasa.gov/planetary/apod?api_key=gdGUBVtUD8CO4BAvQzHkeMa7kAjOvvPq9oHgAObU&date=${date}`
    fetch(apiLink)
      .then(res => res.json())
      .then(data => {
        document.querySelector('h2').innerText = data.title
        document.querySelector('img').src = data.url
        document.querySelector('h3').innerText = data.explanation
        console.log(data)
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
  }
