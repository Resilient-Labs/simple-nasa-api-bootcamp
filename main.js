document.querySelector('button').addEventListener('click',returnMedia)
function returnMedia(){
let userInput=document.querySelector('input').value    
const url=`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${userInput}`//adds query selector to link userInput to API
fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data) 
      console.log(data.date)
      console.log(data.explanation)
      console.log(data.url)


      let vid=document.querySelector('iframe')
      let img=document.querySelector('img')
      document.querySelector('h4').innerText=data.explanation
      document.querySelector('span').innerText=data.date
      if(data.media_type==='image'){
        document.querySelector('img').src=data.url
        document.querySelector('iframe').src=''
        vid.classList.add('hidden')
        img.classList.remove('hidden')
     }else if(data.media_type==='video'){
        document.querySelector('iframe').src=data.url
        document.querySelector('img').src=''
        vid.classList.remove('hidden')
        img.classList.add('hidden')
      }
     }) 
    .catch(err => { 
     console.log(`error ${err}`) 
    });
}    