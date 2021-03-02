const apiKey = "gWL6OqPVdOHgGDnGKn7s56Pt6VbL8W7Qj3oUrDOc"
const video = document.querySelector('video')
const img = document.querySelector('img')


const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=`
document.querySelector('button').addEventListener('click', clicky)


function clicky() {
  let month = document.querySelector('#month').value
  let day = document.querySelector('#day').value
  let year = document.querySelector('#year').value
  video.src=''
  video.classList.add('hide')
  img.src=''

  fetch(url+`${year}-${month}-${day}`)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {

      console.log(data)
      if(data.media_type==="image"){
        img.src = data.hdurl
      } else {
        video.classList.remove('hide')
        video.src = data.hdurl
      }
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
