//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getPictureOfDay)

function getPictureOfDay(){

    const val = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=qKfO6a7sPKSIJsFajYhkCoYWEbM9XyjlKrUbzR4c&date=${val}`

fetch(url) 
    .then(res => res.json()) 
    .then(data => { 
      console.log(data) 
      console.log(data.title)
      console.log(data.hdurl)
      console.log(data.explanation) 
      document.querySelector('h2').innerText = data.title
      document.querySelector('.genImg').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}
