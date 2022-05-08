//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let option = document.querySelector('input').value
  console.log(option)
  let url = `https://api.nasa.gov/planetary/apod?api_key=k6ua2ghh6jpqYgGkDgBragJ6I6N6bFX1g1vLBVQz&date=${option}`

  fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('h2').innerText = data.title
    if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      }else if(data.media_type === 'video'){
        document.querySelector('iframe').src = data.url
      }else{
          alert('Unsupported Media Type')
      }
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}

