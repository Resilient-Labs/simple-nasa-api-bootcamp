//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//NOTE: API date range is between June 16, 1995 - present day 2023.

document.querySelector('button').addEventListener('click', getPicture)
document.querySelector('iframe').classList.add('hide')
document.querySelector('img').classList.add('hide')

function getPicture(){
  let selection = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=quXaMGjew4W8QWHsLRAQTJI2mEBq2Srsh8Esxrda&date=${selection}`
  fetch(url) //api request to server, server sends back json object with 2 properties, message and status
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data)
  document.querySelector('h2').innerText = data.title
  document.querySelector('h3').innerText = data.explanation 
  document.querySelector('h1').innerText = data.date
  document.querySelector('img').src = data.hdurl
  document.querySelector('.video').src = data.url
    if(data.media_type === 'image'){ //conditional needed to hide or make visible images or videos, depending on what media that day had (also created the .hide class in css to support this)
      document.querySelector('img').classList.remove('hide')
      document.querySelector('iframe').classList.add('hide')
    }else{
      document.querySelector('img').classList.add('hide')
      document.querySelector('iframe').classList.remove('hide')
    }
    
  })
  .catch(err => {
  console.log(`error ${err}`)
  });

}




