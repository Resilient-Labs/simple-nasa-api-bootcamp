const button = document.querySelector('button')

const apiKey = 'nLW95whLwKHdMaZ7hX4FGBBBSs6PcfqhN39vboNn'
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
})
