const button = document.querySelector('button')
const apiKey = 'oGY8ttjPg0j90XE2OFF1ue3w5Ro0h77eIlgrnT3O'
const nasaPic = document.querySelector('img')
const nasaVid = document.querySelector('iframe')

button.addEventListener('click', ()=>{
const date = document.getElementById('input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`) //template literal because apiKey and date have been declared. User will enter in date
  .then(response => response.json()) //parse responds as JSON
  .then(response => {
    if (response.media_type == "image"){
      if(nasaVid.style.display == "inline"){
        nasaPic.style.display = "inline";
        nasaVid.style.display= "none"
        nasaPic.src = response.hdurl
      }else{
        nasaPic.style.display= "inline;"
        nasaPic.src = response.hdurl;
      }
      //document.querySelector('img').src = response.hdurl
    }else if (response.media_type == "video"){
      //document.querySelector('iframe').src = response.url
      if(nasaPic.style.display == "inline"){
        nasaPic.style.display= "none";
        nasaVid.style.display = "inline";
        nasaVid.src = response.url;
      }else{
        nasaVid.style.display= "inline";
        nasaVid.src= response.url;
      }
}

})

  .catch(err => {
      console.log(`error ${err}`)
      alert("Sorry, there are no results for your search.")
  })
})



/*const apiKey = ''
button.addEventListener('click', ()=>{
const date = document.querySelector('#input').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      if (response.media_type == "image"){
        document.querySelector('img').src = response.hdurl
      }else if (response.media_type == "video"){
        document.querySelector('iframe').src = response.url
}

})

    .catch(err => {
        console.log(`error ${err}`)
        alert("Sorry, there are no results for your search.")
    })
})*/
