//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

//https://api.nasa.gov/planetary/apod?api_key=udvIecmGGeoqatCwvnurdKnGNObq6EelQdpXaTeX - beginning link
//udvIecmGGeoqatCwvnurdKnGNObq6EelQdpXaTeX - key

//need multiple query parameter. Date parameter/api key
//base url separated by question mark. and then every other parameter separated by ampersand/&


document.querySelector('button').addEventListener('click', getDate)

function getDate(){
  let date = document.querySelector('input').value
  let apiLink = `https://api.nasa.gov/planetary/apod?api_key=udvIecmGGeoqatCwvnurdKnGNObq6EelQdpXaTeX&date=${date}`
  fetch(apiLink)
  .then(res=> res.json())
  .then(data=> {
    console.log(data)
    document.querySelector('h2 span').innerText = data.date
    document.querySelector('img').src = data.url
    document.querySelector('h3').innerText = data.explanation
  })
  .catch(err => {
    console.log(`error ${err}`)
  })

}


// fetch(apiLink)

// .then(res=> res.json())
// .then(data => {
//   console.log(data)
// })
// .catch(err => {
//   console.log(`error`)
// })
