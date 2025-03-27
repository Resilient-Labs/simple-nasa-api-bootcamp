//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=04EOM2cH9sQCdYrOBihbvVblbi0PezDKswwwYRYM&date=${choice}`
  document.querySelector('img').src = ""
  document.querySelector('iframe').src = ""

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerHTML = data.title
        if (data.media_type === "image") {
          document.querySelector('img').src = data.hdurl
          document.querySelector('img').classList.remove('hidden')
          document.querySelector('iframe').classList.add('hidden')
        }else if (data.media_type === "video"){
          document.querySelector('iframe').src = data.url
          document.querySelector('img').classList.add('hidden')
          document.querySelector('iframe').classList.remove('hidden')
        }
        
        document.querySelector('h3').innerText = data.explanation
      })
     

      .catch(err => {
          console.log(`error ${err}`)
      });
}

