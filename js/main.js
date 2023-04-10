//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//date rang June 16, 1995 - today's date
let image = document.querySelector('img')
let iframe = document.querySelector('iframe')
document.querySelector('button').addEventListener('click', nasaGenerator)

function nasaGenerator(){

  let selection = document.querySelector('input').value
  let url = `https://api.nasa.gov/planetary/apod?api_key=O6yuyALLg8fd6VoTXqOAYGCTmHuUac64SV1cJGjQ&date=${selection}`

  fetch(url) 
  .then(res => res.json()) // parseresponse as JSON 
  .then(data => { 
    console.log(data) 
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('h2').innerText = data.title

    //hidden class must be set/removed in each conditional. HTML class assignments only correspond to the first loading page. 
    if(data.media_type === 'image'){
      image.src = data.hdurl || data.url 
      image.classList.remove('hidden')
      iframe.classList.add('hidden')
    } else if(data.media_type === 'video'){
      iframe.src = data.url
      iframe.classList.remove('hidden')
      image.classList.add('hidden')
    }
    }) 
    
  .catch(err => { 
      console.log(`error ${err}`) 
    })
}
