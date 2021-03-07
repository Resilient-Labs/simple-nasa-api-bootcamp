//The user will enter a date.
//Use that date to get the NASA picture of the day from that date!
//https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getImages)

function getImages(){
  let inputValue = document.querySelector('input').value

  const url = `https://api.nasa.gov/planetary/apod?api_key=HIskrRiLGy7eqQvkXV8flVA8gp59ROPIRXvoj4XN&date=${inputValue}`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
  console.log(data)
  document.querySelector('h2').innerText = data.title
  document.querySelector('h3').innerText = data.explanation
  if(data.media_type === "image"){
    document.querySelector('img').src = data.hdurl
  } else {
    document.querySelector('iframe').src = data.url
  }


   })
  .catch(err => { console.log(`error ${err}`)
  });
}
// const url = 'https://api.nasa.gov/planetary/apod?api_key=HIskrRiLGy7eqQvkXV8flVA8gp59ROPIRXvoj4XN&date='
//
//
//
// fetch(url)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
// console.log(data.hdurl)
// document.querySelector('h2').src = data.hdurl
//  })
// .catch(err => { console.log(`error ${err}`)
// });
