//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
const nasaPic = document.querySelector('img')
const nasaVid = document.querySelector('iframe')

document.querySelector('button').addEventListener('click', getInfo)

function getInfo() {
  const date = document.querySelector('input').value
  const api = 'https://api.nasa.gov/planetary/apod?api_key=' + date
  console.log(api)
  fetch(api)
    .then(response => response.json())
    

    .then(data => {
      console.log(data)
      document.querySelector('h3').innerText = data.title
      if(data.media_type === 'image'){
        nasaVid.classList.add('hide');
        document.querySelector('img').src = data.hdurl;
        nasaPic.classList.remove('hide');
      }
      else if(data.media_type === 'video'){
        nasaPic.classList.add('hide');
        document.querySelector('iframe').src = data.url;
        nasaVid.classList.remove('hide');
      }
      document.querySelector('h2').innerText = data.explanation
    })
    
    
    .catch(error => {
      console.log(`Error ${error}`)
    })
}
