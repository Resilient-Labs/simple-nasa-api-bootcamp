//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector('button').addEventListener('click',getPicture)

function getPicture(){
    let date = document.querySelector('input').value
    let url = `https://api.nasa.gov/planetary/apod?api_key=KrMeocvnfh00ckqo758bWghT5iX4MeuOojLci57G&date=${date}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data => { 
      console.log(data.hdurl) 
      document.querySelector('h2').innerText = data.title
      document.querySelector('img').src = data.hdurl
      document.querySelector('h3').innerText = data.explanation
    }) 
    .catch(err => { 
        console.log(`error ${err}`) 
    }); 
}

