document.querySelector('.button').addEventListener('click', getPicture)


function getPicture(){
  let date = document.querySelector('.date').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=MKBI0e92lFuyrddeIGJmX8N2yadjH2QQH3I4yguz&date=${date}`)
  .then(res => res.json())
  .then(data => {
   document.querySelector('img').src = data.url
   document.querySelector('p').innerText = data.explanation
    })
    .catch(err => {
    console.log(`error ${err}`)
    })
}
