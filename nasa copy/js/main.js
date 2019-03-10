document.querySelector('form').addEventListener('submit', nasa)

function nasa(e){
  e.preventDefault()
  let date = document.querySelector('input').value
  console.log(date)
  fetch(`https://api.nasa.gov/planetary/apod?hd&date=${date}&api_key=qpBS79XKHlq9BwCsV74AkB6oYiFoHqOwSKmgXmg4`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
        console.log(response)
        if(response.media_type == "image"){
          document.querySelector('img').src = response.hdurl
        }else{
          document.querySelector('iframe').src = response.url
        }

    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("Do you not know how to enter a day?")
    });
}
