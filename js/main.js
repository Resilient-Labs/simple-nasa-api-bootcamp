//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto);

const image = document.querySelector('img')
const vid = document.querySelector('iframe')

function getPhoto(){
  let date = document.querySelector('input').value

  const url = `https://api.nasa.gov/planetary/apod?api_key=_________________=${date}`
  
  fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.msg){
          document.querySelector('h3').innerText = data.msg
          document.querySelector('h2').innerText = ''
          image.hidden = true
          vid.hidden  = true
        }else {
            if (data.media_type === "image"){
            image.src = data.url
            image.hidden = false
            vid.hidden = true
          } else {
            vid.src = data.url
            vid.hidden = false
            image.hidden = true
          }
          document.querySelector('h3').innerText = data.explanation
          document.querySelector('h2').innerText = data.title  
        }        
      })
      .catch(err => {
          console.log(`error ${err}`)
  });
}