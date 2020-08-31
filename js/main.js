const key = 'DRGKV3Gw6CS0wmW7utKSYzvnEk1EK8alWo8V5SbF'
const btn = document.querySelector("button")

// const btn = document.querySelector("button")

// btn.addEventListener('click', ()=>{
//
//   const input = document.querySelector("input").value
btn.addEventListener("click", ()=>{
const search = document.querySelector("input").value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}&date=${search}`)
  .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
  .then(response => {
    if(response.media_type=="image"){
      document.querySelector('img').src = response.hdurl
    }
    else if(response.media_type=="video"){
      document.querySelector("iframe").src = response.url
    }

  })
  .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
  });
// })
})
