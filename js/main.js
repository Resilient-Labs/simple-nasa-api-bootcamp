//The user will enter a date.
// Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
  //document.querySelector('iframe').src = ""
  document.querySelector('img').src = ""
  const inputDate = document.querySelector('input').value

  const url = `https://api.nasa.gov/planetary/apod?api_key=fwj2YrluRggaRFDgEzZxhtVeSHfLr0EoMzgwihsT&date=${inputDate}`

  fetch(url)
  .then(res => res.jason()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText = data.title
    document.querySelector('img').src = data.hdurl
    document.querySelector('h3').innerText = data.explanation
    if(data.media_type === 'image'){
      document.querySelector('img').src = data.hdurl
    } /* else {
      document.querySelector('iframe').src = data.url
    } */
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}



// fwj2YrluRggaRFDgEzZxhtVeSHfLr0EoMzgwihsT api key 
// with group //

document.querySelector('button').addEventListener('click', getPicture )

function getPicture(){
  document.querySelector('img').src = ''
 // document.querySelector('iframe').src = ''
  const inputDate = document.querySelector('input').value

  fetch(`https://api.nasa.gov/planetary/apod?api_key=J0pEl9p2AhYfjG99tngffnZAK03csWvapgtrAPC9&date=${inputDate}`) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      if(data.media_type === 'image'){
        document.querySelector('img').src = data.hdurl
      } /* else{
        document.querySelector('iframe').src = data.url
      } */
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}



