// collaborated with team Hayden to complete successfully team project 

document.querySelector('button').addEventListener("click" ,information)

function information(){
  let date = document.querySelector('input').value
  let image = document.querySelector('#picture')
  // let paragraph = document.querySelector('#description')
  const url = ('https://api.nasa.gov/planetary/apod?api_key=()='+ date)
  
  fetch(url)
    .then(res => res.json()) 
    .then(data => {
        document.querySelector('#picture').src = data.url
        console.log(data)
        // document.querySelector('#description').innerText = data.description
    })
    .catch(err => { 
      alert(`error ${err}`) 
  }); 
}
// collaborated with team Hayden to complete successfully team project  

