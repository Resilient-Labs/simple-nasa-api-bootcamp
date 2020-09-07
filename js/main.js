// House Moses
//declaring a variable button assigning it to the id button in the html
let button = document.getElementById('button')
button.addEventListener("click", ()=>{
  let date = document.getElementById("userAnswer").value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=9DFi11zjvYxmjEmwhvQZDaU2yZMmdKomQiucHo1B&date=${date}`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {
      console.log(response)
      document.querySelector('img').src = response.url
      document.querySelector('iframe').src = response.url
      document.getElementById('title').textContent = response.title
      document.getElementById('explanation').textContent = response.explanation
      if (response.media_type === 'video'){
        //removes class from iframe
        document.querySelector("iframe").classList.remove("video")
        document.getElementById('video').src =response.url;
      } else{
        document.getSelector('img').src =response.url;
      }
    })
  })
  button.addEventListener("click", (event) =>{
    event.preventDefault()
  })
