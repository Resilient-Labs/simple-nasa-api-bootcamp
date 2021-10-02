 document.querySelector('button').addEventListener("click" ,information)

function information(){
  let date = document.querySelector('input').value
  let image = document.querySelector('#picture')
  // let paragraph = document.querySelector('#description')
  const url = ('https://api.nasa.gov/planetary/apod?api_key=lZCQc1FPi5m88SmbE545L98htQK0susLG5SR0GPo&date='+ date)
  
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

