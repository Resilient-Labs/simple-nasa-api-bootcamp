//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPicture)

function getPicture(){

  let inputVal = document.querySelector('input').value

  const apiKey = "AzDd4DBEW8Hu5gKUMkwqSlDu2zKrOI91cOKfmL7h"

let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${inputVal}`
  fetch (url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      if (data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      } else {
        document.querySelector('iframe').src = data.url
      }
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}
