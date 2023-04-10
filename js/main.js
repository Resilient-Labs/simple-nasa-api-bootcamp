//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/
document.querySelector('button').addEventListener('click', getNASA)
//Grab the api key to access


let image = document.querySelector('img')
let iframe = document.querySelector('iframe')

function getNASA(){
  //the key allows access to the nasa
  //add date info to link to be able to search date (& date)
let selection = document.querySelector('input').value
const url = `https://api.nasa.gov/planetary/apod?api_key=NvotVGDHUWGrG6yKaGUOopr7Ja5YMbZrfdwVSChQ&date=${selection}`
   
  fetch(url) 
    
  //converting url in a way to read script
    .then(res => res.json())
    .then(data => { 
      console.log(data) 
      document.querySelector('h2').innerText = data.title
       
  //conditional for videos to appear, from Shawn
      if(data.media_type == "image"){
        document.querySelector('img').src = data.url
        image.classList.remove('hidden')
        iframe.classList.add('hidden')
      }else if(data.media_type == "video"){
        document.querySelector('iframe').src = data.url
        image.classList.add('hidden')
        iframe.classList.remove('hidden')
      }else{
        console.log ('unknown media type', data.media_type)
      }
   //innertext the explanation(in console)
   document.querySelector('p').innerText = data.explanation
    })
  .catch(err => { 
    console.log(`error ${err}`) 
  }); 


}

