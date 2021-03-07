//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getMedia)

function getMedia() {
  let year = document.querySelector('.year').value
  let month = document.querySelector('.month').value
  let day = document.querySelector('.day').value

  let date = '${year}-${month}-$(day)'

const url = 'https://api.nasa.gov/planetary/apod?api_key=KSNvPpwR300AzsIGAM3zhmtsn39vD1WGUTGrzq5I&date=${date}'

console.log(url);

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

      console.log(data);
      console.log(data.title)
      console.log(data.url)
      console.log(data.explanation)

      document.querySelector('h2').innerText = data.title

      document.querySelector('img').src = data.url


      document.querySelector('h3').innerText = data.explanation


    })
    .catch(err => {
        console.log(`error ${err}`)
});
}
