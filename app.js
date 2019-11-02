let img = document.querySelector('.img')
let btn = document.querySelector('.search')

btn.addEventListener('click', function(){
  let year = document.querySelector('.year').value
  let month = document.querySelector('.month').value
  let day = document.querySelector('.day').value
  let date = `${year}-${month}-${day}`

  fetch (`https://api.nasa.gov/planetary/apod?api_key=${api_key}&hd=true&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      img.src = response.hdurl
    })
    .catch(err => {
        console.log(`error ${err}`)
        alert("sorry, there are no results for your search")
    });
})
