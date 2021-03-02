const apiKey = "gWL6OqPVdOHgGDnGKn7s56Pt6VbL8W7Qj3oUrDOc"
const iframe = document.querySelector('iframe')
const img = document.querySelector('img')


const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=`
document.querySelector('button').addEventListener('click', clicky)


function clicky() {
  let month = document.querySelector('#month').value
  let day = document.querySelector('#day').value
  let year = document.querySelector('#year').value
  iframe.src=''
  iframe.classList.add('hide')
  img.classList.add('hide')
  img.src=''

  fetch(url+`${year}-${month}-${day}`)
    .then(res => res.json())
    // parse response as JSON
    .then(data => {

      console.log(data)
      if(data.media_type==="image"){
        img.classList.remove('hide')
        img.src = data.url
      } else if(data.media_type==="video"){
        iframe.classList.remove('hide')
        iframe.src = data.url
      }
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}
