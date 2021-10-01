//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

// const url = "https://api.nasa.gov/"
// fetch("https://api.nasa.gov/") 
//     .then(res => res.json()) // parse response as JSON 
//     .then(data => { 
//       console.log(data) 
//     }) 
//     .catch(err => { 
//         console.log(`error ${err}`) 
//     }); 
document.getElementById('button').addEventListener('click',nasa)


function nasa(){
    let date = document.getElementById('date').value
    let pic = document.getElementById('nasaImg')
    let video = document.getElementById('nasaVid')
    let information = document.getElementById('info')
    let title = document.getElementById('name')
    const url = ('https://api.nasa.gov/planetary/apod?api_key=8TTlq2oNQaLlBawJxVyycsHaz6KtEDQdcoJ6NuyL&date=' + date)
   

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(datafromNasa => { 
      console.log(datafromNasa) 
      if(datafromNasa.code == 400){
          let errorMessage = 'ERROR  ' + datafromNasa.msg
          alert(errorMessage)
        
      }else if(datafromNasa.media_type == 'video'){
             pic.classList.add('hide')
            video.src = datafromNasa.url
            information.innerText = datafromNasa.explanation
            title.innerText = datafromNasa.title
            video.classList.remove('hide')

      } else {
          pic.src = datafromNasa.url
          information.innerText = datafromNasa.explanation
          title.innerText = datafromNasa.title
          video.classList.add('hide')
          pic.classList.remove('hide')
          


    
      }
    
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    });

}