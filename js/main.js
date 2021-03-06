//The user will enter a date. Use that date to get the NASA picture of the
// day from that date! https://api.nasa.gov/
// const url = 'https://api.nasa.gov/planetary/apod?api_key=Kf6wOfWmdHfCcAFePPoxVPxTseTmtNKmEfAVflfA&date'

  // every api will give you a different url - you google the documentation
  // fetch makes the request for a url , its a function that returns somerthing

document.querySelector('button').addEventListener('click', getPicture)
function getPicture() {


  let value = document.getElementById('input').value;
  console.log(value)

  const apiKey = 'Kf6wOfWmdHfCcAFePPoxVPxTseTmtNKmEfAVflfA'

  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${value}`
  // let searchItem = document.querySelector('button')
    fetch(url)

  // this is what talks to server to get your data, once you get it do what you want with it
      .then(res => res.json())// parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.title
        document.querySelector('h3').innerText = data.explanation
        if (data.media_type === 'image') {
          document.querySelector('img').src = data.hdurl
        } else {
          document.querySelector('iframe').src = data.url
        }
      })
      .catch(err => {
        console.log(`error ${err}`)
      });
    console.log(url)
}
