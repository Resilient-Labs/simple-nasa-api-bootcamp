const api = "8b6uBhMSKGypYTbWozaPJ5rIOKp2xHeFFTgfDbhg";
const btn = document.querySelector("button")
let input;

btn.addEventListener('click', ()=>{
input = document.querySelector("input").value
fetch(`https://api.nasa.gov/planetary/apod?date=${input}&api_key=${api}`)
    .then(res => res.json())
    .then(response => {
      document.querySelector('img').src = response.hdurl
    })
    .catch(err =>{
      console.log(`error ${err}`)
      alert("sorry, no results for this search")
    });

})
