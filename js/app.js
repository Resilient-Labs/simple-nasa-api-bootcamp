
const kaniahNasaKey = "mjcbmqLbEAbjs1buoLUQv8c8YIE9AgSx6c1HIZoD"
const btn = document.querySelector('button')

btn.addEventListener('click', ()=>{
  let date = document.querySelector('#input').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=${kaniahNasaKey}&date=${date}`)
  .then(res => res.json())
  .then(response => {
    if (response.media_type === "image"){
      document.querySelector('img').src = response.hdurl
    }else if(response.media_type === "video"){
      document.querySelector("iframe").src = response.url
    }
    console.log(response)
  })
  .catch(err =>{
    console.log(`error ${err}`)
    alert("sorry, there are no results for your search")
  })
})
