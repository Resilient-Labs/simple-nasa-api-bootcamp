//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
//media for that date

//adds event listener to button
document.querySelector('button').addEventListener('click', getDate)
//grabs the element from the DOM into the correct space
let iframe = document.querySelector('iframe')
let image = document.querySelector('img')

function getDate(){
    let selection = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=wS00OiDfmzn0GUFMX4mIRggCge8IL93pgOwc4nH9&date=${selection}`
    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data)
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('img').src = data.url
      if(data.media_type === 'image'){
        image.src = data.url
        //grabs class associate with element image
        image.classList.remove('hidden')
        iframe.classList.add('hidden')
      }else if(data.media_type === 'video'){
        iframe.src = data.url
        image.classList.add('hidden')
        iframe.classList.remove('hidden')
      }else{
        console.log('unknown media type', data.media_type)
      }
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
}