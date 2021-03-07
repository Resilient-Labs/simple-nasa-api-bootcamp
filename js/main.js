//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
// let key = "x4ZG3DMV5h2o6qdU31967iXBTVdofuGFc6jIMtot"
document.querySelector('button').addEventListener('click', getData)

function getData(){
  let date = document.querySelector('input').value
  let apiLink = `https://api.nasa.gov/planetary/apod?api_key=x4ZG3DMV5h2o6qdU31967iXBTVdofuGFc6jIMtot&date=${date}`
  fetch(apiLink)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.url
      document.querySelector('h3').innerText = data.explanation
      console.log(data);
    })
    .catch(err => {
      console.log(`error ${err}`);
    })
}
