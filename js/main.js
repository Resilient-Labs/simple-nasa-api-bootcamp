/*🚀 Project: Simple NASA API

### Goal: Enable your user to enter a date and return the picture/video of the day from NASA's API
Use that date to get the NASA picture of the day from that date!
 https://api.nasa.gov/planetary/apod  */
//   API key is c3dAgftlXBiIBzNQlDDGiA4b7rRXu2fxj896jFdE   //

document.querySelector('button').addEventListener('click',getPicture)


////////////////////////////////////////////every after ? = API key//
function getPicture(){
  const userDate = document.querySelector('.year').value +'-'+ document.querySelector('.month').value + '-'+ document.querySelector('.day').value

  /* '-' is for Nasa since they want that format to shouw its APO */
  console.log(userDate)
  const url = `https://api.nasa.gov/planetary/apod?api_key=c3dAgftlXBiIBzNQlDDGiA4b7rRXu2fxj896jFdE&date=`+ userDate
// const variabe go inside the function//
console.log(url)
  fetch(url)
    .then(res => res.json()) //this is just the syntax//parse response as JSON//
    .then(data=>{
      console.log(data)
      document.querySelector('img').src = data.hdurl
      document.querySelector('h2').innerText = data.date
          document.querySelector('h3').innerText = data.title
      document.querySelector('.description').innerText = data.explanation

    })
    .catch(err =>{
      alert(`error ${err}`)
    })

}
