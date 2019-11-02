
const apiKey= 'mvibBlCbqKMDGn0hLzXqXjp5yZuiHQRSJvYE2wDR'
const btn= document.querySelector('button')


btn.addEventListener('click',()=>{
let date= document.querySelector('#date').value

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
  .then(res => res.json())

  .then(response =>{
    console.log(response.url)
    if(response.media_type == 'image'){
    document.querySelector('img').src= response.hdurl
  }else if(response.media_type = 'video'){
    document.querySelector('iframe').src= response.url

  }

  })
  .catch( err=>{
  console.log( `error ${err}`)
  alert("There is no picture available for the selected date")
  })
})
