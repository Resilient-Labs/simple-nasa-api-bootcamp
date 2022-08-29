//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click', getPhoto);

const image = document.querySelector('img')
const vid = document.querySelector('iframe')

function getPhoto(){
  let date = document.querySelector('input').value

  const url = `https://api.nasa.gov/planetary/apod?api_key=_________&date=${date}`
  
  fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.msg){
          document.querySelector('h2').hidden = false
          document.querySelector('h2').innerText = data.msg
          document.querySelector('p').hidden = true;
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
          document.querySelector('p').innerText = data.explanation
          document.querySelector('#photoName').innerText = data.title  
        }        
      })
      .catch(err => {
        document.querySelector('h2').hidden = false
        document.querySelector('h2').innerText = 'Something went wrong. Try again'
  });
}
