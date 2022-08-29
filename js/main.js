//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){
  let pictureVal = document.querySelector('input').value
  let url = `https://api.nasa.gov/planetary/apod?api_key=hO62Jos3tbVzC895ESlm7U3Wz0pbVMLhXsZRQlnu&date=${pictureVal}`
  document.querySelector('iframe').src = ''
  





fetch(url)
  .then(res => res.json())
  .then(data => {
    document.querySelector('h2').innerText = data.title
    document.querySelector('h3').innerText = data.explanation
    if(data.media_type === 'image'){
    document.querySelector('img').src = data.url
    } else if (data.media_type === 'video'){
    document.querySelector('iframe').src = data.url
    }
    console.log(data.media_type)
   
    
  }) 
  .catch(err => {
    console.log(`error ${err}`)
  })

}