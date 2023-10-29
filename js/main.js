
const button = document.querySelector('button')
let image = document.querySelector('img')
let iframe = document.querySelector('iframe')
let media = document.querySelector('#media')
iframe.classList.add('hide')
image.classList.add('hide')
media.classList.add('hide')
function getMedia(){
  let input = document.querySelector('input').value
  fetch(`https://api.nasa.gov/planetary/apod?api_key=LWObqbbggyslRPhlTBEMczXEVAaXp2WJMherI5rc&date=${input}`) 
    .then(res => res.json()) 
    .then(data => { 
      console.log(data) 
 
      if(data.media_type === 'image'){
        image.classList.remove('hide')
        iframe.classList.add('hide')
        media.classList.remove('hide')
        image.src = data.url

      
        
      }else{
        image.classList.add('hide')
        iframe.classList.remove('hide')
        media.classList.remove('hide')
        iframe.src = data.url

      }
      document.querySelector('h2').innerText = data.date
      document.querySelector('h3').innerText = data.explanation
      
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });
  }

  button.addEventListener('click', getMedia)