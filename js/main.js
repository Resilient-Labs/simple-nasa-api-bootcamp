//The user will enter a date. 
//Use that date to get the NASA picture of the day from that date! 
// https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getImage)
    
function getImage(){
  let date= document.querySelector('#input').value
  const url= `https://api.nasa.gov/planetary/apod?api_key=LkxNd16xedRUYCJwHlqdxA8wyPvj47iVZq1aDKhy&date=${date}`
    fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('h2').innerText= data.title
    document.querySelector('img').src= data.url
    document.querySelector('h3').innerText= data.explanation
    
  })
  .catch(err => {
      console.log(`error ${err}`)
});
} 
